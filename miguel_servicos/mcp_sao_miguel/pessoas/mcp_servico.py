from mcp.server.mcpserver import MCPServer
import urllib.request as requisicao

NOME = "pessoas"
mcp = MCPServer(NOME)

URL_PESSOAS = "http://miguel-pessoas:8000/pessoa"


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
    name="buscar_pessoa_por_nome",
    title="busca pessoa pelo nome",
    description="procura clientes ou funcionários do mercadinho pelo nome, para consultar pontos de fidelidade ou cargo",
)
def get_pessoa_por_nome(nome):
    url = f"{URL_PESSOAS}/nome/{nome}"
    sucesso, conteudo, erro = acessar(url)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


@mcp.tool(
    name="listar_clientes",
    title="lista todos os clientes cadastrados",
    description="retorna todos os clientes do mercadinho, incluindo pontos de fidelidade",
)
def get_clientes():
    url = f"{URL_PESSOAS}/clientes"
    sucesso, conteudo, erro = acessar(url)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


@mcp.tool(
    name="listar_funcionarios",
    title="lista todos os funcionários cadastrados",
    description="retorna todos os funcionários do mercadinho, incluindo cargo",
)
def get_funcionarios():
    url = f"{URL_PESSOAS}/funcionarios"
    sucesso, conteudo, erro = acessar(url)

    if sucesso:
        return conteudo
    else:
        return f"Ocorreu um erro: {erro}"


if __name__ == "__main__":
    mcp.run(transport="streamable-http",
             streamable_http_path="/mcp", host="0.0.0.0")
