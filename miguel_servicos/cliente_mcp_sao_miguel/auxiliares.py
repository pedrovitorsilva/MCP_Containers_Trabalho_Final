import asyncio
import json
import os
from contextlib import AsyncExitStack

from dotenv import load_dotenv
from mcp import ClientSession
from mcp.client.streamable_http import streamable_http_client
from google import genai

from rich.console import Console
from rich.panel import Panel
from rich.prompt import Prompt
from rich import box

MODELO = "gemini-3.1-flash-lite"
PROMPT = """Você é o MiguelBot, o assistente virtual do Mercadinho São Miguel.
Você não é uma pessoa real, é um assistente de IA.

Quando o usuário solicitar informações sobre produtos, estoque, campanhas,
clientes, funcionários, vendas ou resgates de pontos, utilize as ferramentas
MCP disponíveis para obter as informações.

Recomendações:
    - Perguntas sobre preço, estoque ou promoções → ferramentas de produtos
    - Perguntas sobre clientes, funcionários ou pontos → ferramentas de pessoas
    - Perguntas sobre vendas ou resgates de fidelidade → ferramentas de vendas
    - Perguntas fora do escopo → diga que não está capacitado e peça para
      o usuário procurar o atendimento presencial do Mercadinho São Miguel."""

load_dotenv()
console = Console()

SERVICOS_MCP = {
    "produtos": "http://localhost:8001/mcp",
    "pessoas":  "http://localhost:8002/mcp",
    "vendas":   "http://localhost:8003/mcp",
}


async def iniciar():
    """Cria o cliente de IA (Foi pensado para ser Gemini) a partir da API key do ambiente"""
    iniciado, stack, cliente_IA = False, AsyncExitStack(), None

    try:
        cliente_IA = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])
        iniciado = True
    except Exception as e:
        console.print(f"[red]⚠️  Erro iniciando conexão com IA: {e}[/red]")

    return iniciado, stack, cliente_IA


async def conectar_servicos(stack):
    """Conecta a cada serviço MCP definido em SERVICOS_MCP e retorna as sessões ativas"""
    servicos = {}

    for nome_servico, url in SERVICOS_MCP.items():
        try:
            stream_leitura, stream_escrita = await stack.enter_async_context(
                streamable_http_client(url)
            )

            conexao = await stack.enter_async_context(
                ClientSession(stream_leitura, stream_escrita)
            )
            await conexao.initialize()

            servicos[nome_servico] = conexao
            console.print(f"[green]✅ Conectado ao serviço '{nome_servico}'[/green]")
        except Exception as e:
            console.print(f"[red]⚠️  Erro ao conectar ao serviço '{nome_servico}': {e}[/red]")

    return servicos


async def get_ferramentas(servicos):
    """Lista as ferramentas de cada serviço conectado e monta o índice nome -> ferramenta/serviço"""
    ferramentas = {}

    for nome_servico, conexao in servicos.items():
        try:
            resultado = await conexao.list_tools()

            for ferramenta in resultado.tools:
                ferramentas[ferramenta.name] = {
                    "servico": {
                        "nome": nome_servico,
                        "conexao": conexao
                    },
                    "ferramenta": {
                        "type": "function",
                        "name": ferramenta.name,
                        "description": ferramenta.description,
                        "parameters": ferramenta.input_schema,
                    }
                }
        except Exception as e:
            console.print(f"[red]⚠️  Erro listando ferramentas de '{nome_servico}': {e}[/red]")

    return ferramentas


async def executar_ferramenta(ferramentas, ferramenta_desejada, argumentos):
    """Chama a ferramenta MCP indicada no serviço correspondente e retorna o texto do resultado"""
    if ferramenta_desejada not in ferramentas:
        return f"Ferramenta '{ferramenta_desejada}' não encontrada"

    ferramenta = ferramentas[ferramenta_desejada]

    servico = ferramenta['servico']
    conexao = servico['conexao']

    try:
        resultado = await conexao.call_tool(ferramenta_desejada, arguments=argumentos)
        return extrair_texto(resultado)
    except Exception as e:
        return f"Erro ao executar ferramenta '{ferramenta_desejada}': {e}"


def extrair_texto(resultado):
    """Extrai o texto de um resultado MCP, priorizando conteúdo estruturado (JSON)"""
    if resultado.structured_content:
        return json.dumps(resultado.structured_content, ensure_ascii=False)

    conteudo = []
    for c in resultado.content:
        if hasattr(c, "text"):
            conteudo.append(c.text)
        else:
            conteudo.append(str(c))

    return "\n".join(conteudo)


async def chat(cliente_IA, ferramentas, servicos_conectados):
    """Loop interativo do chat: recebe perguntas, chama a IA e executa ferramentas até obter resposta final"""
    console.print(Panel(
        f"[bold cyan]MiguelBot[/bold cyan]\n"
        f"Assistente virtual do Mercadinho São Miguel\n\n"
        f"[dim]Serviços conectados:[/dim]\n"
        + "\n".join([f"  [green]✅[/green] {s}" for s in servicos_conectados]),
        title="[bold orange3]Mercadinho São Miguel[/bold orange3]",
        title_align="left",
        border_style="orange3",
        box=box.ROUNDED,
    ))

    mensagens = [
        {
            "type": "user_input",
            "content": [{"type": "text", "text": PROMPT}]
        }
    ]

    while True:
        pergunta = Prompt.ask("\n[bold cyan]Você[/bold cyan] ›")

        if pergunta.strip().lower() in ("sair", "exit", "quit", "tchau", "/s"):
            console.print("[dim]Até logo! 👋[/dim]")
            break

        console.print(Panel(
            pergunta,
            title="[cyan]Você[/cyan]",
            title_align="left",
            border_style="cyan",
            box=box.ROUNDED,
            expand=False,
        ))

        mensagens.append({
            "type": "user_input",
            "content": [{"type": "text", "text": pergunta}]
        })

        with console.status("[bold yellow]MiguelBot está pensando...[/bold yellow]", spinner="dots"):
            while True:
                try:
                    resposta = await cliente_IA.aio.interactions.create(
                        model=MODELO,
                        input=mensagens,
                        tools=[f['ferramenta'] for f in ferramentas.values()]
                    )
                except Exception as e:
                    console.print(f"[red]⚠️  Erro ao chamar Gemini: {e}[/red]")
                    break

                execucoes = [
                    item for item in resposta.steps if item.type == "function_call"
                ]

                if not execucoes:
                    console.print(Panel(
                        resposta.output_text,
                        title="[green]MiguelBot[/green]",
                        title_align="left",
                        border_style="green",
                        box=box.ROUNDED,
                    ))
                    console.print(
                        f"[black on orange3] mercadinho [/][black on blue] {MODELO} [/]"
                    )
                    break

                mensagens.extend(resposta.steps)
                for execucao in execucoes:
                    argumentos = execucao.arguments
                    resultado = await executar_ferramenta(ferramentas, execucao.name, argumentos)

                    mensagens.append({
                        "type": "function_result",
                        "name": execucao.name,
                        "call_id": execucao.id,
                        "result": [{"type": "text", "text": resultado}]
                    })


async def finalizar(stack):
    """Fecha todas as conexões abertas (MCP e demais recursos) via o AsyncExitStack"""
    await stack.aclose()
