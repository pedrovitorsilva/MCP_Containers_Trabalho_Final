import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
    },
    preco_venda: {
      type: Number,
      required: true,
    },
    preco_custo: {
      type: Number,
      required: true,
    },
    codigo_barras: {
      type: String,
      unique: true,
      required: true,
    },
    qtd_atual: {
      type: Number,
      default: 0,
    },
    qtd_minima: {
      type: Number,
      default: 10,
    },
    id_fornecedor: {
      type: Number,
    },
    // As campanhas gravadas dentro do produto (assets/produtos.json) carregam
    // um recorte da campanha (id_campanha, descricao, pontos_resgate_min,
    // data_termino), diferente do documento completo da colecao "campanhas".
    // Usar Mixed preserva esse recorte em vez de descarta-lo na leitura.
    campanhas_ativas: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
  },
  { timestamps: true },
);

const Produto = mongoose.model("Produto", produtoSchema);

export { Produto, produtoSchema };
