# Estrutura de pastas

Árvore de arquivos do projeto **Mercadinho São Miguel**, organizada pelas 3 etapas da solução (serviços web, serviços MCP e chatbot).

<details open>
<summary>📁 <strong>mercadinho_sao_miguel/</strong> (clique para recolher/expandir)</summary>

<ul>
<li>📄 .gitignore</li>
<li>📄 README.md</li>
<li>📄 orient_servicos_avaliacao_descritivo.pdf</li>
<li>
📁 <strong>docs/</strong>
<ul>
<li>📄 endpoints.md</li>
<li>📄 estrutura_pastas.md</li>
<li>📄 orient_servicos_avaliacao_descritivo.md</li>
</ul>
</li>
<li>
📁 <strong>img/</strong>
<ul>
<li>🖼️ Logotipo_IF.svg</li>
<li>🖼️ modelagem.png</li>
</ul>
</li>
<li>
📁 <strong>miguel_servicos/</strong> — código-fonte das 3 etapas
<ul>
<li>
📁 <strong>sao_miguel/</strong> — Etapa 1: serviços web, banco e front-end
<ul>
<li>🐳 Dockerfile</li>
<li>🐳 docker-compose.yml</li>
<li>📄 init-db.js</li>
<li>📄 package.json</li>
<li>
📁 <strong>frontend/</strong>
<ul>
<li>🌐 dashboard.html</li>
<li>🌐 index.html</li>
</ul>
</li>
<li>
📁 <strong>produtos/</strong> — API de Produtos, Entradas e Campanhas
<ul>
<li>📁 config/ → dbConnect.js</li>
<li>📁 controllers/ → controller_campanha.js, controller_entrada.js, controllers_produtos.js</li>
<li>📁 models/ → Campanha.js, Entrada.js, Produto.js</li>
<li>📁 routes/ → routes_campanha.js, routes_entrada.js, routes_produtos.js</li>
<li>📁 services/ → services_campanha.js, services_entrada.js, services_produtos.js</li>
<li>📄 package.json</li>
<li>📄 server.js</li>
</ul>
</li>
<li>
📁 <strong>pessoas/</strong> — API de Pessoas (Clientes e Funcionários)
<ul>
<li>📁 config/ → dbConnect.js</li>
<li>📁 controllers/ → controller_pessoa.js</li>
<li>📁 models/ → Pessoa.js</li>
<li>📁 routes/ → routes_pessoa.js</li>
<li>📁 services/ → services_pessoa.js</li>
<li>📄 package.json</li>
<li>📄 server.js</li>
</ul>
</li>
<li>
📁 <strong>vendas/</strong> — API de Vendas e Resgates (fidelidade)
<ul>
<li>📁 config/ → dbConnect.js</li>
<li>📁 controllers/ → controller_venda.js, controllers_resgate.js</li>
<li>📁 models/ → Pessoa.js, Produto.js, Resgate.js, Venda.js</li>
<li>📁 routes/ → routes_resgate.js, routes_venda.js</li>
<li>📁 services/ → services_resgate.js, services_venda.js</li>
<li>📄 package.json</li>
<li>📄 server.js</li>
</ul>
</li>
</ul>
</li>
<li>
📁 <strong>mcp_sao_miguel/</strong> — Etapa 2: serviços MCP
<ul>
<li>🐳 Dockerfile</li>
<li>🐳 docker-compose.yml</li>
<li>📁 produtos/ → mcp_servico.py</li>
<li>📁 pessoas/ → mcp_servico.py</li>
<li>📁 vendas/ → mcp_servico.py</li>
</ul>
</li>
<li>
📁 <strong>cliente_mcp_sao_miguel/</strong> — Etapa 3: chatbot via terminal
<ul>
<li>🔒 .env <em>(não versionado — contém a chave da API)</em></li>
<li>📄 .env.example</li>
<li>📄 .python-version</li>
<li>🐍 auxiliares.py</li>
<li>🐍 chat_mercadinho.py</li>
<li>📄 requirements.txt</li>
</ul>
</li>
</ul>
</li>
</ul>

</details>
