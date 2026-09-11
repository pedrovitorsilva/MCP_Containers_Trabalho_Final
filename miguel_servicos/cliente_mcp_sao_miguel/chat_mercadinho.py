import asyncio

from auxiliares import (
    iniciar,
    conectar_servicos,
    get_ferramentas,
    chat,
    finalizar,
    console,
    SERVICOS_MCP,
)


async def executar():
    """Orquestra o ciclo de vida da aplicação: inicia IA, conecta serviços MCP e roda o chat"""
    iniciado, stack, cliente_IA = await iniciar()

    if iniciado:
        try:
            servicos = await conectar_servicos(stack)

            faltantes = [s for s in SERVICOS_MCP if s not in servicos]
            if faltantes:
                console.print(
                    "[yellow]⚠️  Serviço(s) MCP indisponível(is), seguindo com "
                    f"funcionalidade reduzida (faltando: {', '.join(faltantes)})[/yellow]"
                )

            if not servicos:
                console.print("[red]Nenhum serviço MCP disponível. Encerrando.[/red]")
                return

            ferramentas = await get_ferramentas(servicos)
            servicos_conectados = list(servicos.keys())

            if not ferramentas:
                console.print("[red]Nenhuma ferramenta MCP disponível. Encerrando.[/red]")
                return

            await chat(cliente_IA, ferramentas, servicos_conectados)
        finally:
            await finalizar(stack)


if __name__ == "__main__":
    asyncio.run(executar())
