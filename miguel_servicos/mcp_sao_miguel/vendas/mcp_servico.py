from mcp.server.mcpserver import MCPServer
import urllib.request as requisicao

NOME = "vendas"
mcp = MCPServer(NOME)

URL_VENDAS = "http://miguel-vendas:8000/vendas"
URL_RESGATES = "http://miguel-vendas:8000/resgate"


def acessar(url):
    sucesso, conteudo, erro = False, None, None

    try:
        resposta = requisicao.urlopen(url)
        if resposta.code == 200:
            conteudo = resposta.read().decode("utf-8")

            sucesso = True
    except Exception as e:
        erro = str(e)

        print(f"Ocorreu um erro acessando: {url}, erro: {erro}")

    return sucesso, conteudo, erro


@mcp.tool(
    name="listar_vendas",
    title="lista o histórico de vendas",
    description="retorna as vendas mais recentes registradas no mercadinho",
)
def get_vendas():
    sucesso, conteudo, erro = acessar(URL_VENDAS)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


@mcp.tool(
    name="historico_compras_cliente",
    title="histórico de compras de um cliente",
    description="retorna todas as vendas realizadas por um cliente específico, identificado pelo id",
)
def get_historico_compras_cliente(id_cliente):
    url = f"{URL_VENDAS}/cliente/{id_cliente}"
    sucesso, conteudo, erro = acessar(url)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


@mcp.tool(
    name="resgates_cliente",
    title="resgates de fidelidade de um cliente",
    description="retorna os resgates de pontos de fidelidade feitos por um cliente específico, identificado pelo id",
)
def get_resgates_cliente(id_cliente):
    url = f"{URL_RESGATES}/cliente/{id_cliente}"
    sucesso, conteudo, erro = acessar(url)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


if __name__ == "__main__":
    mcp.run(transport="streamable-http",
             streamable_http_path="/mcp", host="0.0.0.0")
