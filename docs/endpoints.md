## Endpoints

### `miguel-produtos` — porta 7001

| Método | Rota                              | Descrição                            |
| ------ | --------------------------------- | ------------------------------------ |
| GET    | `/health`                         | Estado do serviço e da conexão       |
| GET    | `/produtos`                       | Lista todos os produtos              |
| GET    | `/produtos/:id`                   | Busca produto por ID                 |
| GET    | `/produtos/descricao/:descricao`  | Busca produtos por descrição         |
| GET    | `/produtos/codigo/:codigo_barras` | Busca produto por código de barras   |
| POST   | `/produtos`                       | Cria um novo produto                 |
| PATCH  | `/produtos/:id`                   | Atualiza um produto                  |
| DELETE | `/produtos/:id`                   | Remove um produto                    |
| GET    | `/entrada`                        | Lista as entradas de estoque         |
| GET    | `/entrada/:id`                    | Busca entrada por ID                 |
| GET    | `/entrada/produto/:nomeProduto`   | Entradas que contêm um produto       |
| POST   | `/entrada`                        | Registra nova entrada de mercadoria  |
| PATCH  | `/entrada/:id`                    | Atualiza uma entrada                 |
| DELETE | `/entrada/:id`                    | Remove uma entrada                   |
| GET    | `/campanha`                       | Lista todas as campanhas             |
| GET    | `/campanha/ativas`                | Campanhas vigentes na data de hoje   |
| GET    | `/campanha/descricao/:descricao`  | Busca campanhas por descrição        |
| GET    | `/campanha/:id`                   | Busca campanha por ID                |
| POST   | `/campanha`                       | Cria nova campanha                   |
| PATCH  | `/campanha/:id`                   | Atualiza uma campanha                |
| DELETE | `/campanha/:id`                   | Remove uma campanha                  |

### `miguel-pessoas` — porta 7002

| Método | Rota                   | Descrição                    |
| ------ | ---------------------- | ---------------------------- |
| GET    | `/health`              | Estado do serviço            |
| GET    | `/pessoa`              | Lista todas as pessoas       |
| GET    | `/pessoa/clientes`     | Apenas os clientes           |
| GET    | `/pessoa/funcionarios` | Apenas os funcionários       |
| GET    | `/pessoa/nome/:nome`   | Busca pessoas por nome       |
| GET    | `/pessoa/:id`          | Busca pessoa por ID          |
| POST   | `/pessoa`              | Cadastra nova pessoa         |
| PATCH  | `/pessoa/:id`          | Atualiza dados de uma pessoa |
| DELETE | `/pessoa/:id`          | Remove uma pessoa            |

### `miguel-vendas` — porta 7003

| Método | Rota                        | Descrição                       |
| ------ | --------------------------- | ------------------------------- |
| GET    | `/health`                   | Estado do serviço               |
| GET    | `/vendas`                   | Lista as vendas (mais recentes) |
| GET    | `/vendas/cliente/:idCliente`| Histórico de compras do cliente |
| GET    | `/vendas/:id`               | Busca venda por ID              |
| POST   | `/vendas`                   | Cria nova venda                 |
| PATCH  | `/vendas/:id`               | Atualiza uma venda              |
| DELETE | `/vendas/:id`               | Remove uma venda                |
| GET    | `/resgate`                  | Lista todos os resgates         |
| GET    | `/resgate/cliente/:idCliente`| Resgates de um cliente         |
| GET    | `/resgate/:id`              | Busca resgate por ID            |
| POST   | `/resgate`                  | Cria novo resgate de pontos     |
| PATCH  | `/resgate/:id`              | Atualiza um resgate             |
| DELETE | `/resgate/:id`              | Remove um resgate               |

**`mcp-produtos`**

| Ferramenta                  | Endpoint consumido                     | Descrição                                    |
| ---------------------------- | --------------------------------------- | --------------------------------------------- |
| `listar_produtos`            | `GET /produtos`                         | Todos os produtos, com preço e estoque        |
| `buscar_produto_por_codigo`  | `GET /produtos/codigo/:codigo_barras`   | Um produto pelo código de barras              |
| `listar_campanhas_ativas`    | `GET /campanha/ativas`                  | Campanhas promocionais vigentes hoje          |

**`mcp-pessoas`**

| Ferramenta                | Endpoint consumido        | Descrição                                          |
| -------------------------- | --------------------------- | --------------------------------------------------- |
| `buscar_pessoa_por_nome`   | `GET /pessoa/nome/:nome`    | Cliente ou funcionário pelo nome (pontos ou cargo)   |
| `listar_clientes`          | `GET /pessoa/clientes`      | Todos os clientes, com pontos de fidelidade          |
| `listar_funcionarios`      | `GET /pessoa/funcionarios`  | Todos os funcionários, com cargo                     |

**`mcp-vendas`**

| Ferramenta                  | Endpoint consumido                | Descrição                                    |
| ----------------------------- | ------------------------------------ | ----------------------------------------------- |
| `listar_vendas`                | `GET /vendas`                        | Histórico de vendas (mais recentes)             |
| `historico_compras_cliente`    | `GET /vendas/cliente/:idCliente`     | Compras de um cliente específico                |
| `resgates_cliente`             | `GET /resgate/cliente/:idCliente`    | Resgates de fidelidade de um cliente específico |
