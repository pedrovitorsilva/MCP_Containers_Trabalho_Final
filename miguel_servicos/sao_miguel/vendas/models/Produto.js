// Copia do schema de Produto mantida aqui de proposito: cada microsservico
// precisa ser autossuficiente. Este servico NAO registra o model "Produto"
// (isso e responsabilidade do miguel-produtos); exporta apenas o schema, que
// pode ser embarcado como item de uma Venda.
import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    nome: { type: String },
    descricao: { type: String },
    preco_venda: { type: Number },
    preco_custo: { type: Number },
    codigo_barras: { type: String },
    qtd_atual: { type: Number, default: 0 },
    qtd_minima: { type: Number, default: 10 },
    id_fornecedor: { type: Number },
    campanhas_ativas: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
  },
  { _id: false },
);

export { produtoSchema };
