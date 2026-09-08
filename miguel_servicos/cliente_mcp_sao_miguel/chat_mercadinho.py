import asyncio

from auxiliares import (
    iniciar,
    conectar_servicos,
    get_ferramentas,
    chat,
    finalizar,
    console,
)


async def executar():
    """Orquestra o ciclo de vida da aplicação: inicia IA, conecta serviços MCP e roda o chat"""
    iniciado, stack, cliente_IA = await iniciar()

    if iniciado:
        try:
            servicos = await conectar_servicos(stack)

            if not servicos:
                console.print("[red]Nenhum serviço MCP foi conectado. Encerrando.[/red]")
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
