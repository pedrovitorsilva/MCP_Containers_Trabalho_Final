from mcp.server.mcpserver import MCPServer
import urllib.request as requisicao

NOME = "produtos"
mcp = MCPServer(NOME)

URL_PRODUTOS = "http://miguel-produtos:8000/produtos"
URL_CAMPANHAS = "http://miguel-produtos:8000/campanha"


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
    name="listar_produtos",
    title="lista todos os produtos do mercadinho",
    description="retorna todos os produtos cadastrados, com nome, preço, estoque e código de barras",
)
def get_produtos():
    sucesso, conteudo, erro = acessar(URL_PRODUTOS)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


@mcp.tool(
    name="buscar_produto_por_codigo",
    title="busca produto pelo código de barras",
    description="procura um produto específico do mercadinho pelo seu código de barras",
)
def get_produto_por_codigo(codigo_barras):
    url = f"{URL_PRODUTOS}/codigo/{codigo_barras}"
    sucesso, conteudo, erro = acessar(url)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


@mcp.tool(
    name="listar_campanhas_ativas",
    title="lista as campanhas promocionais vigentes",
    description="retorna as campanhas de desconto que estão ativas na data de hoje",
)
def get_campanhas_ativas():
    url = f"{URL_CAMPANHAS}/ativas"
    sucesso, conteudo, erro = acessar(url)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


if __name__ == "__main__":
    mcp.run(transport="streamable-http",
             streamable_http_path="/mcp", host="0.0.0.0")
