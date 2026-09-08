// ---------------------------------------------------------------------------
// Seed do banco "mercadinho" — Mercadinho São Miguel
//
// Este arquivo é montado em /docker-entrypoint-initdb.d/init-db.js e o
// container oficial do MongoDB o executa com o mongosh na PRIMEIRA vez que o
// volume de dados é criado (variável MONGO_INITDB_DATABASE=mercadinho define o
// banco corrente). Para rodar de novo, apague o volume:
//
//     docker compose down -v && docker compose up -d --build
//
// Os dados vieram de trabalho-web-pos-01/assets/*.json, com dois ajustes:
//   - o campo "id" numérico do documento raiz foi removido (o _id é gerado
//     pelo próprio MongoDB); os códigos embarcados (id_cliente, id_produto,
//     id_fornecedor...) foram preservados como estavam;
//   - as datas viraram BSON Date de verdade, inclusive as que estavam
//     escritas como a string "ISODate('...')" em campanha.json.
//
// ARQUIVO GERADO — não edite à mão; altere os JSON em assets/ e rode de novo:
//
//     node gerar-init-db.mjs
// ---------------------------------------------------------------------------

const PRODUTOS = [
  {
    "nome": "ARROZ",
    "descricao": "Pacote 5kg",
    "preco_venda": 9.5,
    "preco_custo": 7,
    "codigo_barras": "7891000000011",
    "qtd_atual": 100,
    "qtd_minima": 20,
    "id_fornecedor": 21,
    "campanhas_ativas": [
      {
        "id_campanha": 1,
        "descricao": "Campanha anual",
        "pontos_resgate_min": 200,
        "data_termino": new Date("2026-12-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "FEIJÃO",
    "descricao": "Tipo 1 1kg",
    "preco_venda": 8.5,
    "preco_custo": 5,
    "codigo_barras": "7891000000022",
    "qtd_atual": 80,
    "qtd_minima": 20,
    "id_fornecedor": 21,
    "campanhas_ativas": [
      {
        "id_campanha": 1,
        "descricao": "Campanha anual",
        "pontos_resgate_min": 150,
        "data_termino": new Date("2026-12-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "CAFÉ",
    "descricao": "500g",
    "preco_venda": 7.9,
    "preco_custo": 4,
    "codigo_barras": "7891000000033",
    "qtd_atual": 60,
    "qtd_minima": 15,
    "id_fornecedor": 22,
    "campanhas_ativas": [
      {
        "id_campanha": 2,
        "descricao": "Fevereiro",
        "pontos_resgate_min": 100,
        "data_termino": new Date("2026-03-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "AÇÚCAR",
    "descricao": "1kg",
    "preco_venda": 4.5,
    "preco_custo": 2.5,
    "codigo_barras": "7891000000044",
    "qtd_atual": 70,
    "qtd_minima": 10,
    "id_fornecedor": 22,
    "campanhas_ativas": [
      {
        "id_campanha": 3,
        "descricao": "Abril",
        "pontos_resgate_min": 80,
        "data_termino": new Date("2026-04-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "SAL",
    "descricao": "1kg refinado",
    "preco_venda": 2.5,
    "preco_custo": 1,
    "codigo_barras": "7891000000055",
    "qtd_atual": 40,
    "qtd_minima": 5,
    "id_fornecedor": 23,
    "campanhas_ativas": [
      {
        "id_campanha": 4,
        "descricao": "Maio",
        "pontos_resgate_min": 50,
        "data_termino": new Date("2026-05-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "MACARRÃO",
    "descricao": "Espaguete 500g",
    "preco_venda": 4.2,
    "preco_custo": 2,
    "codigo_barras": "7891000000066",
    "qtd_atual": 90,
    "qtd_minima": 10,
    "id_fornecedor": 23,
    "campanhas_ativas": [
      {
        "id_campanha": 5,
        "descricao": "Junho",
        "pontos_resgate_min": 120,
        "data_termino": new Date("2026-06-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "LEITE",
    "descricao": "Integral 1L",
    "preco_venda": 6.9,
    "preco_custo": 3.5,
    "codigo_barras": "7891000000077",
    "qtd_atual": 110,
    "qtd_minima": 15,
    "id_fornecedor": 24,
    "campanhas_ativas": [
      {
        "id_campanha": 6,
        "descricao": "Julho",
        "pontos_resgate_min": 180,
        "data_termino": new Date("2026-07-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "ÓLEO",
    "descricao": "Soja 900ml",
    "preco_venda": 8.9,
    "preco_custo": 4.5,
    "codigo_barras": "7891000000088",
    "qtd_atual": 55,
    "qtd_minima": 10,
    "id_fornecedor": 24,
    "campanhas_ativas": [
      {
        "id_campanha": 7,
        "descricao": "Agosto",
        "pontos_resgate_min": 220,
        "data_termino": new Date("2026-08-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "MARGARINA",
    "descricao": "500g",
    "preco_venda": 5.8,
    "preco_custo": 3,
    "codigo_barras": "7891000000099",
    "qtd_atual": 30,
    "qtd_minima": 12,
    "id_fornecedor": 25,
    "campanhas_ativas": [
      {
        "id_campanha": 8,
        "descricao": "Setembro",
        "pontos_resgate_min": 160,
        "data_termino": new Date("2026-09-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "BISCOITO",
    "descricao": "Cream Cracker 400g",
    "preco_venda": 3.9,
    "preco_custo": 1.8,
    "codigo_barras": "7891000000100",
    "qtd_atual": 75,
    "qtd_minima": 8,
    "id_fornecedor": 25,
    "campanhas_ativas": [
      {
        "id_campanha": 9,
        "descricao": "Outubro",
        "pontos_resgate_min": 140,
        "data_termino": new Date("2026-10-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "FARINHA DE TRIGO",
    "descricao": "1kg tipo 1",
    "preco_venda": 5.5,
    "preco_custo": 3,
    "codigo_barras": "7891000000111",
    "qtd_atual": 85,
    "qtd_minima": 15,
    "id_fornecedor": 21,
    "campanhas_ativas": [
      {
        "id_campanha": 1,
        "descricao": "Campanha anual",
        "pontos_resgate_min": 110,
        "data_termino": new Date("2026-12-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "FUBÁ",
    "descricao": "500g",
    "preco_venda": 3.2,
    "preco_custo": 1.5,
    "codigo_barras": "7891000000122",
    "qtd_atual": 65,
    "qtd_minima": 10,
    "id_fornecedor": 21,
    "campanhas_ativas": [
      {
        "id_campanha": 10,
        "descricao": "Novembro",
        "pontos_resgate_min": 70,
        "data_termino": new Date("2026-11-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "VINAGRE",
    "descricao": "500ml álcool",
    "preco_venda": 3.5,
    "preco_custo": 1.6,
    "codigo_barras": "7891000000133",
    "qtd_atual": 50,
    "qtd_minima": 8,
    "id_fornecedor": 22,
    "campanhas_ativas": [
      {
        "id_campanha": 3,
        "descricao": "Abril",
        "pontos_resgate_min": 60,
        "data_termino": new Date("2026-04-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "MOLHO DE TOMATE",
    "descricao": "Extrato 340g",
    "preco_venda": 4.8,
    "preco_custo": 2.2,
    "codigo_barras": "7891000000144",
    "qtd_atual": 95,
    "qtd_minima": 12,
    "id_fornecedor": 22,
    "campanhas_ativas": [
      {
        "id_campanha": 5,
        "descricao": "Junho",
        "pontos_resgate_min": 90,
        "data_termino": new Date("2026-06-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "SARDINHA",
    "descricao": "Lata 125g ao tomate",
    "preco_venda": 6.5,
    "preco_custo": 3.8,
    "codigo_barras": "7891000000155",
    "qtd_atual": 45,
    "qtd_minima": 10,
    "id_fornecedor": 26,
    "campanhas_ativas": [
      {
        "id_campanha": 6,
        "descricao": "Julho",
        "pontos_resgate_min": 130,
        "data_termino": new Date("2026-07-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "ATUM",
    "descricao": "Lata 170g em água",
    "preco_venda": 8,
    "preco_custo": 4.8,
    "codigo_barras": "7891000000166",
    "qtd_atual": 60,
    "qtd_minima": 10,
    "id_fornecedor": 26,
    "campanhas_ativas": [
      {
        "id_campanha": 7,
        "descricao": "Agosto",
        "pontos_resgate_min": 150,
        "data_termino": new Date("2026-08-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "ERVILHA",
    "descricao": "Lata 200g",
    "preco_venda": 4,
    "preco_custo": 2,
    "codigo_barras": "7891000000177",
    "qtd_atual": 70,
    "qtd_minima": 10,
    "id_fornecedor": 26,
    "campanhas_ativas": [
      {
        "id_campanha": 8,
        "descricao": "Setembro",
        "pontos_resgate_min": 80,
        "data_termino": new Date("2026-09-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "MILHO VERDE",
    "descricao": "Lata 200g",
    "preco_venda": 4.2,
    "preco_custo": 2.1,
    "codigo_barras": "7891000000188",
    "qtd_atual": 80,
    "qtd_minima": 10,
    "id_fornecedor": 26,
    "campanhas_ativas": [
      {
        "id_campanha": 9,
        "descricao": "Outubro",
        "pontos_resgate_min": 80,
        "data_termino": new Date("2026-10-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "ACHOCOLATADO",
    "descricao": "Pó 400g",
    "preco_venda": 12.9,
    "preco_custo": 7.5,
    "codigo_barras": "7891000000199",
    "qtd_atual": 55,
    "qtd_minima": 10,
    "id_fornecedor": 27,
    "campanhas_ativas": [
      {
        "id_campanha": 1,
        "descricao": "Campanha anual",
        "pontos_resgate_min": 250,
        "data_termino": new Date("2026-12-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "CREME DE LEITE",
    "descricao": "Caixinha 200g",
    "preco_venda": 5.2,
    "preco_custo": 2.8,
    "codigo_barras": "7891000000200",
    "qtd_atual": 90,
    "qtd_minima": 15,
    "id_fornecedor": 27,
    "campanhas_ativas": [
      {
        "id_campanha": 2,
        "descricao": "Fevereiro",
        "pontos_resgate_min": 100,
        "data_termino": new Date("2026-03-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "LEITE CONDENSADO",
    "descricao": "Caixinha 395g",
    "preco_venda": 7.5,
    "preco_custo": 4.2,
    "codigo_barras": "7891000000211",
    "qtd_atual": 75,
    "qtd_minima": 12,
    "id_fornecedor": 27,
    "campanhas_ativas": [
      {
        "id_campanha": 3,
        "descricao": "Abril",
        "pontos_resgate_min": 140,
        "data_termino": new Date("2026-04-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "IOGURTE",
    "descricao": "Natural integral 170g",
    "preco_venda": 4.9,
    "preco_custo": 2.6,
    "codigo_barras": "7891000000222",
    "qtd_atual": 60,
    "qtd_minima": 20,
    "id_fornecedor": 28,
    "campanhas_ativas": [
      {
        "id_campanha": 4,
        "descricao": "Maio",
        "pontos_resgate_min": 90,
        "data_termino": new Date("2026-05-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "QUEIJO MUSSARELA",
    "descricao": "Fatiado 150g",
    "preco_venda": 14.9,
    "preco_custo": 9,
    "codigo_barras": "7891000000233",
    "qtd_atual": 35,
    "qtd_minima": 10,
    "id_fornecedor": 28,
    "campanhas_ativas": [
      {
        "id_campanha": 5,
        "descricao": "Junho",
        "pontos_resgate_min": 300,
        "data_termino": new Date("2026-06-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "PRESUNTO",
    "descricao": "Fatiado 200g",
    "preco_venda": 11.5,
    "preco_custo": 6.5,
    "codigo_barras": "7891000000244",
    "qtd_atual": 40,
    "qtd_minima": 10,
    "id_fornecedor": 28,
    "campanhas_ativas": [
      {
        "id_campanha": 6,
        "descricao": "Julho",
        "pontos_resgate_min": 220,
        "data_termino": new Date("2026-07-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "LINGUIÇA",
    "descricao": "Calabresa defumada 500g",
    "preco_venda": 18.9,
    "preco_custo": 11,
    "codigo_barras": "7891000000255",
    "qtd_atual": 30,
    "qtd_minima": 8,
    "id_fornecedor": 29,
    "campanhas_ativas": [
      {
        "id_campanha": 7,
        "descricao": "Agosto",
        "pontos_resgate_min": 380,
        "data_termino": new Date("2026-08-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "FRANGO",
    "descricao": "Peito congelado 1kg",
    "preco_venda": 22.9,
    "preco_custo": 14,
    "codigo_barras": "7891000000266",
    "qtd_atual": 50,
    "qtd_minima": 10,
    "id_fornecedor": 29,
    "campanhas_ativas": [
      {
        "id_campanha": 8,
        "descricao": "Setembro",
        "pontos_resgate_min": 450,
        "data_termino": new Date("2026-09-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "CARNE BOVINA",
    "descricao": "Patinho moído 500g",
    "preco_venda": 29.9,
    "preco_custo": 20,
    "codigo_barras": "7891000000277",
    "qtd_atual": 40,
    "qtd_minima": 8,
    "id_fornecedor": 29,
    "campanhas_ativas": [
      {
        "id_campanha": 9,
        "descricao": "Outubro",
        "pontos_resgate_min": 600,
        "data_termino": new Date("2026-10-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "OVO",
    "descricao": "Dúzia branco tipo A",
    "preco_venda": 13.9,
    "preco_custo": 8.5,
    "codigo_barras": "7891000000288",
    "qtd_atual": 120,
    "qtd_minima": 24,
    "id_fornecedor": 30,
    "campanhas_ativas": [
      {
        "id_campanha": 10,
        "descricao": "Novembro",
        "pontos_resgate_min": 280,
        "data_termino": new Date("2026-11-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "PÃO DE FORMA",
    "descricao": "Fatiado 500g",
    "preco_venda": 9.9,
    "preco_custo": 5.5,
    "codigo_barras": "7891000000299",
    "qtd_atual": 45,
    "qtd_minima": 12,
    "id_fornecedor": 30,
    "campanhas_ativas": [
      {
        "id_campanha": 1,
        "descricao": "Campanha anual",
        "pontos_resgate_min": 200,
        "data_termino": new Date("2026-12-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "BOLACHA RECHEADA",
    "descricao": "Chocolate 130g",
    "preco_venda": 4.5,
    "preco_custo": 2,
    "codigo_barras": "7891000000300",
    "qtd_atual": 100,
    "qtd_minima": 15,
    "id_fornecedor": 30,
    "campanhas_ativas": [
      {
        "id_campanha": 2,
        "descricao": "Fevereiro",
        "pontos_resgate_min": 90,
        "data_termino": new Date("2026-03-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "SUCO DE LARANJA",
    "descricao": "Caixinha 1L",
    "preco_venda": 8.9,
    "preco_custo": 5,
    "codigo_barras": "7891000000311",
    "qtd_atual": 70,
    "qtd_minima": 12,
    "id_fornecedor": 31,
    "campanhas_ativas": [
      {
        "id_campanha": 3,
        "descricao": "Abril",
        "pontos_resgate_min": 170,
        "data_termino": new Date("2026-04-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "REFRIGERANTE",
    "descricao": "Cola 2L",
    "preco_venda": 10.9,
    "preco_custo": 6,
    "codigo_barras": "7891000000322",
    "qtd_atual": 80,
    "qtd_minima": 12,
    "id_fornecedor": 31,
    "campanhas_ativas": [
      {
        "id_campanha": 4,
        "descricao": "Maio",
        "pontos_resgate_min": 210,
        "data_termino": new Date("2026-05-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "ÁGUA MINERAL",
    "descricao": "Sem gás 500ml",
    "preco_venda": 2,
    "preco_custo": 0.8,
    "codigo_barras": "7891000000333",
    "qtd_atual": 200,
    "qtd_minima": 24,
    "id_fornecedor": 31,
    "campanhas_ativas": [
      {
        "id_campanha": 5,
        "descricao": "Junho",
        "pontos_resgate_min": 40,
        "data_termino": new Date("2026-06-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "CHÁ",
    "descricao": "Camomila 10 sachês",
    "preco_venda": 5.9,
    "preco_custo": 3,
    "codigo_barras": "7891000000344",
    "qtd_atual": 55,
    "qtd_minima": 8,
    "id_fornecedor": 32,
    "campanhas_ativas": [
      {
        "id_campanha": 6,
        "descricao": "Julho",
        "pontos_resgate_min": 110,
        "data_termino": new Date("2026-07-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "TEMPERO COMPLETO",
    "descricao": "Com sal 300g",
    "preco_venda": 6.9,
    "preco_custo": 3.5,
    "codigo_barras": "7891000000355",
    "qtd_atual": 65,
    "qtd_minima": 10,
    "id_fornecedor": 32,
    "campanhas_ativas": [
      {
        "id_campanha": 7,
        "descricao": "Agosto",
        "pontos_resgate_min": 130,
        "data_termino": new Date("2026-08-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "CALDO DE FRANGO",
    "descricao": "Tablete 57g c/6",
    "preco_venda": 3.8,
    "preco_custo": 1.8,
    "codigo_barras": "7891000000366",
    "qtd_atual": 90,
    "qtd_minima": 12,
    "id_fornecedor": 32,
    "campanhas_ativas": [
      {
        "id_campanha": 8,
        "descricao": "Setembro",
        "pontos_resgate_min": 70,
        "data_termino": new Date("2026-09-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "KETCHUP",
    "descricao": "Tradicional 400g",
    "preco_venda": 7.5,
    "preco_custo": 3.9,
    "codigo_barras": "7891000000377",
    "qtd_atual": 50,
    "qtd_minima": 8,
    "id_fornecedor": 33,
    "campanhas_ativas": [
      {
        "id_campanha": 9,
        "descricao": "Outubro",
        "pontos_resgate_min": 150,
        "data_termino": new Date("2026-10-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "MAIONESE",
    "descricao": "Tradicional 500g",
    "preco_venda": 9.9,
    "preco_custo": 5.5,
    "codigo_barras": "7891000000388",
    "qtd_atual": 45,
    "qtd_minima": 8,
    "id_fornecedor": 33,
    "campanhas_ativas": [
      {
        "id_campanha": 10,
        "descricao": "Novembro",
        "pontos_resgate_min": 190,
        "data_termino": new Date("2026-11-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "MOSTARDA",
    "descricao": "Tradicional 200g",
    "preco_venda": 5.5,
    "preco_custo": 2.8,
    "codigo_barras": "7891000000399",
    "qtd_atual": 40,
    "qtd_minima": 6,
    "id_fornecedor": 33,
    "campanhas_ativas": [
      {
        "id_campanha": 1,
        "descricao": "Campanha anual",
        "pontos_resgate_min": 100,
        "data_termino": new Date("2026-12-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "SABÃO EM PÓ",
    "descricao": "1kg multiação",
    "preco_venda": 14.9,
    "preco_custo": 8.5,
    "codigo_barras": "7891000000400",
    "qtd_atual": 60,
    "qtd_minima": 10,
    "id_fornecedor": 34,
    "campanhas_ativas": [
      {
        "id_campanha": 2,
        "descricao": "Fevereiro",
        "pontos_resgate_min": 300,
        "data_termino": new Date("2026-03-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "AMACIANTE",
    "descricao": "Concentrado 1L",
    "preco_venda": 11.9,
    "preco_custo": 6.5,
    "codigo_barras": "7891000000411",
    "qtd_atual": 50,
    "qtd_minima": 8,
    "id_fornecedor": 34,
    "campanhas_ativas": [
      {
        "id_campanha": 3,
        "descricao": "Abril",
        "pontos_resgate_min": 230,
        "data_termino": new Date("2026-04-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "DETERGENTE",
    "descricao": "Neutro 500ml",
    "preco_venda": 3.5,
    "preco_custo": 1.5,
    "codigo_barras": "7891000000422",
    "qtd_atual": 100,
    "qtd_minima": 15,
    "id_fornecedor": 34,
    "campanhas_ativas": [
      {
        "id_campanha": 4,
        "descricao": "Maio",
        "pontos_resgate_min": 65,
        "data_termino": new Date("2026-05-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "DESINFETANTE",
    "descricao": "Pinho 500ml",
    "preco_venda": 5.9,
    "preco_custo": 2.8,
    "codigo_barras": "7891000000433",
    "qtd_atual": 70,
    "qtd_minima": 10,
    "id_fornecedor": 35,
    "campanhas_ativas": [
      {
        "id_campanha": 5,
        "descricao": "Junho",
        "pontos_resgate_min": 110,
        "data_termino": new Date("2026-06-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "PAPEL HIGIÊNICO",
    "descricao": "Fardo 12 rolos folha dupla",
    "preco_venda": 19.9,
    "preco_custo": 11,
    "codigo_barras": "7891000000444",
    "qtd_atual": 80,
    "qtd_minima": 12,
    "id_fornecedor": 35,
    "campanhas_ativas": [
      {
        "id_campanha": 6,
        "descricao": "Julho",
        "pontos_resgate_min": 400,
        "data_termino": new Date("2026-07-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "SHAMPOO",
    "descricao": "Anticaspa 400ml",
    "preco_venda": 18.5,
    "preco_custo": 10,
    "codigo_barras": "7891000000455",
    "qtd_atual": 40,
    "qtd_minima": 6,
    "id_fornecedor": 35,
    "campanhas_ativas": [
      {
        "id_campanha": 7,
        "descricao": "Agosto",
        "pontos_resgate_min": 360,
        "data_termino": new Date("2026-08-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "CREME DENTAL",
    "descricao": "Menta 90g",
    "preco_venda": 6.9,
    "preco_custo": 3.5,
    "codigo_barras": "7891000000466",
    "qtd_atual": 85,
    "qtd_minima": 12,
    "id_fornecedor": 36,
    "campanhas_ativas": [
      {
        "id_campanha": 8,
        "descricao": "Setembro",
        "pontos_resgate_min": 130,
        "data_termino": new Date("2026-09-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "SABONETE",
    "descricao": "Lavanda 90g",
    "preco_venda": 3.2,
    "preco_custo": 1.4,
    "codigo_barras": "7891000000477",
    "qtd_atual": 120,
    "qtd_minima": 20,
    "id_fornecedor": 36,
    "campanhas_ativas": [
      {
        "id_campanha": 9,
        "descricao": "Outubro",
        "pontos_resgate_min": 60,
        "data_termino": new Date("2026-10-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "DESODORANTE",
    "descricao": "Aerossol masculino 150ml",
    "preco_venda": 15.9,
    "preco_custo": 8.5,
    "codigo_barras": "7891000000488",
    "qtd_atual": 35,
    "qtd_minima": 6,
    "id_fornecedor": 36,
    "campanhas_ativas": [
      {
        "id_campanha": 10,
        "descricao": "Novembro",
        "pontos_resgate_min": 310,
        "data_termino": new Date("2026-11-30T23:59:59Z")
      }
    ]
  },
  {
    "nome": "ESPONJA DE COZINHA",
    "descricao": "Dupla face pacote c/3",
    "preco_venda": 5.5,
    "preco_custo": 2.5,
    "codigo_barras": "7891000000499",
    "qtd_atual": 90,
    "qtd_minima": 15,
    "id_fornecedor": 37,
    "campanhas_ativas": [
      {
        "id_campanha": 1,
        "descricao": "Campanha anual",
        "pontos_resgate_min": 100,
        "data_termino": new Date("2026-12-31T23:59:59Z")
      }
    ]
  },
  {
    "nome": "SACO DE LIXO",
    "descricao": "30L preto c/15",
    "preco_venda": 8.9,
    "preco_custo": 4.5,
    "codigo_barras": "7891000000500",
    "qtd_atual": 75,
    "qtd_minima": 10,
    "id_fornecedor": 37,
    "campanhas_ativas": [
      {
        "id_campanha": 2,
        "descricao": "Fevereiro",
        "pontos_resgate_min": 170,
        "data_termino": new Date("2026-03-31T23:59:59Z")
      }
    ]
  }
];

const CAMPANHAS = [
  {
    "data_inicio": new Date("2026-01-01T00:00:00Z"),
    "data_termino": new Date("2026-12-31T23:59:59Z"),
    "descricao": "Campanha anual",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-02-01T00:00:00Z"),
    "data_termino": new Date("2026-03-31T23:59:59Z"),
    "descricao": "Fevereiro",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-04-01T00:00:00Z"),
    "data_termino": new Date("2026-04-30T23:59:59Z"),
    "descricao": "Abril",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-05-01T00:00:00Z"),
    "data_termino": new Date("2026-05-31T23:59:59Z"),
    "descricao": "Maio",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-06-01T00:00:00Z"),
    "data_termino": new Date("2026-06-30T23:59:59Z"),
    "descricao": "Junho",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-07-01T00:00:00Z"),
    "data_termino": new Date("2026-07-31T23:59:59Z"),
    "descricao": "Julho",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-08-01T00:00:00Z"),
    "data_termino": new Date("2026-08-31T23:59:59Z"),
    "descricao": "Agosto",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-09-01T00:00:00Z"),
    "data_termino": new Date("2026-09-30T23:59:59Z"),
    "descricao": "Setembro",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-10-01T00:00:00Z"),
    "data_termino": new Date("2026-10-31T23:59:59Z"),
    "descricao": "Outubro",
    "tipo_desconto": "Completo"
  },
  {
    "data_inicio": new Date("2026-11-01T00:00:00Z"),
    "data_termino": new Date("2026-11-30T23:59:59Z"),
    "descricao": "Novembro",
    "tipo_desconto": "Completo"
  }
];

const ENTRADAS = [
  {
    "data_entrada": new Date("2026-01-05T10:00:00Z"),
    "valor_total": 1500,
    "id_fornecedor": 21,
    "itens": [
      {
        "id_produto": 100,
        "nome_produto": "FEIJÃO",
        "quantidade": 100,
        "valor_unitario_custo": 7
      },
      {
        "id_produto": 101,
        "nome_produto": "FEIJÃO",
        "quantidade": 80,
        "valor_unitario_custo": 5
      }
    ]
  },
  {
    "data_entrada": new Date("2026-01-10T10:00:00Z"),
    "valor_total": 800,
    "id_fornecedor": 22,
    "itens": [
      {
        "id_produto": 102,
        "nome_produto": "CAFÉ",
        "quantidade": 60,
        "valor_unitario_custo": 4
      }
    ]
  },
  {
    "data_entrada": new Date("2026-01-15T10:00:00Z"),
    "valor_total": 600,
    "id_fornecedor": 23,
    "itens": [
      {
        "id_produto": 103,
        "nome_produto": "AÇÚCAR",
        "quantidade": 70,
        "valor_unitario_custo": 2.5
      }
    ]
  },
  {
    "data_entrada": new Date("2026-02-01T10:00:00Z"),
    "valor_total": 500,
    "id_fornecedor": 24,
    "itens": [
      {
        "id_produto": 104,
        "nome_produto": "SAL",
        "quantidade": 40,
        "valor_unitario_custo": 1
      }
    ]
  },
  {
    "data_entrada": new Date("2026-02-10T10:00:00Z"),
    "valor_total": 1200,
    "id_fornecedor": 25,
    "itens": [
      {
        "id_produto": 105,
        "nome_produto": "MACARRÃO",
        "quantidade": 90,
        "valor_unitario_custo": 2
      }
    ]
  },
  {
    "data_entrada": new Date("2026-02-20T10:00:00Z"),
    "valor_total": 400,
    "id_fornecedor": 26,
    "itens": [
      {
        "id_produto": 106,
        "nome_produto": "LEITE",
        "quantidade": 110,
        "valor_unitario_custo": 3.5
      }
    ]
  },
  {
    "data_entrada": new Date("2026-03-01T10:00:00Z"),
    "valor_total": 900,
    "id_fornecedor": 27,
    "itens": [
      {
        "id_produto": 107,
        "nome_produto": "ÓLEO",
        "quantidade": 55,
        "valor_unitario_custo": 4.5
      }
    ]
  },
  {
    "data_entrada": new Date("2026-03-10T10:00:00Z"),
    "valor_total": 700,
    "id_fornecedor": 28,
    "itens": [
      {
        "id_produto": 108,
        "nome_produto": "MARGARINA",
        "quantidade": 30,
        "valor_unitario_custo": 3
      }
    ]
  },
  {
    "data_entrada": new Date("2026-03-20T10:00:00Z"),
    "valor_total": 650,
    "id_fornecedor": 29,
    "itens": [
      {
        "id_produto": 109,
        "nome_produto": "BISCOITO",
        "quantidade": 75,
        "valor_unitario_custo": 1.8
      }
    ]
  }
];

const PESSOAS = [
  {
    "tipo_pessoa": "Cliente",
    "nome": "ANA",
    "telefone": "(71) 91111-1111",
    "cpf": "11111111111",
    "pontos_acumulados": 1200,
    "endereco": {
      "cidade": "Vitória da Conquista",
      "uf": "BA"
    }
  },
  {
    "tipo_pessoa": "Cliente",
    "nome": "CLARISSE",
    "telefone": "(71) 92222-2222",
    "cpf": "22222222222",
    "pontos_acumulados": 800,
    "endereco": {
      "cidade": "Vitória da Conquista",
      "uf": "BA"
    }
  },
  {
    "tipo_pessoa": "Cliente",
    "nome": "PEDRO",
    "telefone": "(71) 93333-3333",
    "cpf": "33333333333",
    "pontos_acumulados": 500,
    "endereco": {
      "cidade": "Vitória da Conquista",
      "uf": "BA"
    }
  },
  {
    "tipo_pessoa": "Cliente",
    "nome": "LUANA",
    "telefone": "(71) 94444-4444",
    "cpf": "44444444444",
    "pontos_acumulados": 300,
    "endereco": {
      "cidade": "Vitória da Conquista",
      "uf": "BA"
    }
  },
  {
    "tipo_pessoa": "Cliente",
    "nome": "CARLOS",
    "telefone": "(71) 95555-5555",
    "cpf": "55555555555",
    "pontos_acumulados": 200,
    "endereco": {
      "cidade": "Vitória da Conquista",
      "uf": "BA"
    }
  },
  {
    "tipo_pessoa": "Cliente",
    "nome": "ANONIMO"
  },
  {
    "tipo_pessoa": "Funcionario",
    "nome": "MATEUS",
    "cpf": "99911111111",
    "cargo": "CAIXA",
    "telefone": "(77) 98111-1111"
  },
  {
    "tipo_pessoa": "Funcionario",
    "nome": "SILVIA",
    "cpf": "99922222222",
    "cargo": "CAIXA",
    "telefone": "(77) 98222-2222"
  },
  {
    "tipo_pessoa": "Funcionario",
    "nome": "JOAO",
    "cpf": "99933333333",
    "cargo": "CAIXA",
    "telefone": "7798333-3333"
  },
  {
    "tipo_pessoa": "Funcionario",
    "nome": "RAFAEL",
    "cpf": "99944444444",
    "cargo": "GERENTE",
    "telefone": "(77) 98444-4444"
  },
  {
    "tipo_pessoa": "Funcionario",
    "nome": "BIANCAA",
    "cpf": "99955555555",
    "cargo": "CAIXA",
    "telefone": "(77) 98555-5555"
  }
];

const VENDAS = [
  {
    "data_venda": new Date("2026-02-10T10:00:00Z"),
    "valor_total": 150,
    "pontos_ganhos_total": 15,
    "id_cliente": 1,
    "id_funcionario": 11,
    "itens": [
      {
        "id_produto": 100,
        "nome_produto": "ARROZ",
        "quantidade": 5,
        "preco_unitario": 9.5,
        "desconto": 0,
        "pontos_ganhos_unit": 5
      }
    ],
    "pagamentos": [
      {
        "tipo": "DINHEIRO",
        "valor": 150,
        "data": new Date("2026-02-10T10:05:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-05-15T15:30:00Z"),
    "valor_total": 200,
    "pontos_ganhos_total": 20,
    "id_cliente": 1,
    "id_funcionario": 12,
    "itens": [
      {
        "id_produto": 101,
        "nome_produto": "FEIJÃO",
        "quantidade": 4,
        "preco_unitario": 8.5,
        "desconto": 0,
        "pontos_ganhos_unit": 4
      }
    ],
    "pagamentos": [
      {
        "tipo": "CREDITO",
        "valor": 200,
        "data": new Date("2026-05-15T15:35:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-08-10T11:00:00Z"),
    "valor_total": 100,
    "pontos_ganhos_total": 10,
    "id_cliente": 2,
    "id_funcionario": 13,
    "itens": [
      {
        "id_produto": 102,
        "nome_produto": "CAFÉ",
        "quantidade": 3,
        "preco_unitario": 7.9,
        "desconto": 0,
        "pontos_ganhos_unit": 3
      }
    ],
    "pagamentos": [
      {
        "tipo": "DEBITO",
        "valor": 100,
        "data": new Date("2026-08-10T11:05:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-11-20T18:45:00Z"),
    "valor_total": 300,
    "pontos_ganhos_total": 30,
    "id_cliente": 3,
    "id_funcionario": 14,
    "itens": [
      {
        "id_produto": 103,
        "nome_produto": "AÇÚCAR",
        "quantidade": 10,
        "preco_unitario": 4.5,
        "desconto": 0,
        "pontos_ganhos_unit": 10
      }
    ],
    "pagamentos": [
      {
        "tipo": "PIX",
        "valor": 300,
        "data": new Date("2026-11-20T18:50:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-03-01T09:15:00Z"),
    "valor_total": 80,
    "pontos_ganhos_total": 5,
    "id_cliente": 4,
    "id_funcionario": 15,
    "itens": [
      {
        "id_produto": 104,
        "nome_produto": "SAL",
        "quantidade": 8,
        "preco_unitario": 2.5,
        "desconto": 0,
        "pontos_ganhos_unit": 2
      }
    ],
    "pagamentos": [
      {
        "tipo": "DINHEIRO",
        "valor": 80,
        "data": new Date("2026-03-01T09:20:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-03-15T14:20:00Z"),
    "valor_total": 60,
    "pontos_ganhos_total": 3,
    "id_cliente": 5,
    "id_funcionario": 16,
    "itens": [
      {
        "id_produto": 105,
        "nome_produto": "MACARRÃO",
        "quantidade": 6,
        "preco_unitario": 4.2,
        "desconto": 0,
        "pontos_ganhos_unit": 3
      }
    ],
    "pagamentos": [
      {
        "tipo": "DEBITO",
        "valor": 60,
        "data": new Date("2026-03-15T14:25:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-04-10T16:00:00Z"),
    "valor_total": 500,
    "pontos_ganhos_total": 50,
    "id_cliente": 6,
    "id_funcionario": 17,
    "itens": [
      {
        "id_produto": 106,
        "nome_produto": "LEITE",
        "quantidade": 20,
        "preco_unitario": 6.9,
        "desconto": 5,
        "pontos_ganhos_unit": 20
      }
    ],
    "pagamentos": [
      {
        "tipo": "CREDITO",
        "valor": 300,
        "data": new Date("2026-04-10T16:05:00Z")
      },
      {
        "tipo": "PIX",
        "valor": 200,
        "data": new Date("2026-04-10T16:06:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-06-25T12:10:00Z"),
    "valor_total": 220,
    "pontos_ganhos_total": 22,
    "id_cliente": 7,
    "id_funcionario": 18,
    "itens": [
      {
        "id_produto": 107,
        "nome_produto": "ÓLEO",
        "quantidade": 8,
        "preco_unitario": 8.9,
        "desconto": 0,
        "pontos_ganhos_unit": 8
      }
    ],
    "pagamentos": [
      {
        "tipo": "DINHEIRO",
        "valor": 220,
        "data": new Date("2026-06-25T12:15:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-07-18T13:40:00Z"),
    "valor_total": 40,
    "pontos_ganhos_total": 2,
    "id_cliente": 8,
    "id_funcionario": 19,
    "itens": [
      {
        "id_produto": 108,
        "nome_produto": "MARGARINA",
        "quantidade": 4,
        "preco_unitario": 5.8,
        "desconto": 0,
        "pontos_ganhos_unit": 1
      }
    ],
    "pagamentos": [
      {
        "tipo": "DINHEIRO",
        "valor": 40,
        "data": new Date("2026-07-18T13:45:00Z")
      }
    ]
  },
  {
    "data_venda": new Date("2026-09-05T17:25:00Z"),
    "valor_total": 90,
    "pontos_ganhos_total": 6,
    "id_cliente": 9,
    "id_funcionario": 20,
    "itens": [
      {
        "id_produto": 109,
        "nome_produto": "BISCOITO",
        "quantidade": 6,
        "preco_unitario": 3.9,
        "desconto": 0,
        "pontos_ganhos_unit": 2
      }
    ],
    "pagamentos": [
      {
        "tipo": "DINHEIRO",
        "valor": 90,
        "data": new Date("2026-09-05T17:30:00Z")
      }
    ]
  }
];

const RESGATES = [
  {
    "data_resgate": new Date("2026-11-01T10:00:00Z"),
    "id_cliente": 1,
    "pontos_usados_total": 300,
    "itens_resgatados": [
      {
        "id_produto": 102,
        "nome_produto": "CAFÉ",
        "quantidade": 1,
        "pontos_usados_unit": 300
      }
    ]
  },
  {
    "data_resgate": new Date("2026-11-10T11:00:00Z"),
    "id_cliente": 2,
    "pontos_usados_total": 150,
    "itens_resgatados": [
      {
        "id_produto": 101,
        "nome_produto": "FEIJÃO",
        "quantidade": 1,
        "pontos_usados_unit": 150
      }
    ]
  },
  {
    "data_resgate": new Date("2026-10-10T12:00:00Z"),
    "id_cliente": 3,
    "pontos_usados_total": 200,
    "itens_resgatados": [
      {
        "id_produto": 100,
        "nome_produto": "ARROZ",
        "quantidade": 1,
        "pontos_usados_unit": 200
      }
    ]
  },
  {
    "data_resgate": new Date("2026-09-15T13:00:00Z"),
    "id_cliente": 4,
    "pontos_usados_total": 100,
    "itens_resgatados": [
      {
        "id_produto": 109,
        "nome_produto": "BISCOITO",
        "quantidade": 1,
        "pontos_usados_unit": 100
      }
    ]
  },
  {
    "data_resgate": new Date("2026-09-20T14:00:00Z"),
    "id_cliente": 5,
    "pontos_usados_total": 120,
    "itens_resgatados": [
      {
        "id_produto": 105,
        "nome_produto": "MACARRÃO",
        "quantidade": 2,
        "pontos_usados_unit": 60
      }
    ]
  },
  {
    "data_resgate": new Date("2026-09-25T15:00:00Z"),
    "id_cliente": 6,
    "pontos_usados_total": 350,
    "itens_resgatados": [
      {
        "id_produto": 106,
        "nome_produto": "LEITE",
        "quantidade": 1,
        "pontos_usados_unit": 350
      }
    ]
  },
  {
    "data_resgate": new Date("2026-09-30T16:00:00Z"),
    "id_cliente": 7,
    "pontos_usados_total": 180,
    "itens_resgatados": [
      {
        "id_produto": 107,
        "nome_produto": "ÓLEO",
        "quantidade": 1,
        "pontos_usados_unit": 180
      }
    ]
  },
  {
    "data_resgate": new Date("2026-08-01T17:00:00Z"),
    "id_cliente": 8,
    "pontos_usados_total": 80,
    "itens_resgatados": [
      {
        "id_produto": 104,
        "nome_produto": "SAL",
        "quantidade": 1,
        "pontos_usados_unit": 80
      }
    ]
  },
  {
    "data_resgate": new Date("2026-07-15T18:00:00Z"),
    "id_cliente": 9,
    "pontos_usados_total": 160,
    "itens_resgatados": [
      {
        "id_produto": 103,
        "nome_produto": "AÇÚCAR",
        "quantidade": 2,
        "pontos_usados_unit": 80
      }
    ]
  },
  {
    "data_resgate": new Date("2026-06-20T19:00:00Z"),
    "id_cliente": 10,
    "pontos_usados_total": 90,
    "itens_resgatados": [
      {
        "id_produto": 108,
        "nome_produto": "MARGARINA",
        "quantidade": 1,
        "pontos_usados_unit": 90
      }
    ]
  }
];

// Coleções na ordem em que serão populadas.
const COLECOES = [
  ["produtos", PRODUTOS],
  ["campanhas", CAMPANHAS],
  ["entradas", ENTRADAS],
  ["pessoas", PESSOAS],
  ["vendas", VENDAS],
  ["resgates", RESGATES],
];

print("== Seed do Mercadinho São Miguel ==");

for (const [nome, documentos] of COLECOES) {
  db.getCollection(nome).deleteMany({});
  if (documentos.length > 0) {
    db.getCollection(nome).insertMany(documentos);
  }
  print(`  ${nome}: ${documentos.length} documento(s)`);
}

// Índices únicos equivalentes aos declarados nos schemas do Mongoose.
// "sparse" no CPF porque o cliente ANONIMO não tem CPF.
db.produtos.createIndex({ codigo_barras: 1 }, { unique: true });
db.pessoas.createIndex({ cpf: 1 }, { unique: true, sparse: true });

print("== Seed concluído ==");
