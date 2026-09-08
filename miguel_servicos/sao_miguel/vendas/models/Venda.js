import mongoose from "mongoose";

const pagamentoSchema = new mongoose.Schema(
  {
    tipo: { type: String, required: true },
    valor: { type: Number, required: true },
    data: { type: Date, required: true },
  },
  { _id: false },
);

const vendaSchema = new mongoose.Schema({
  data_venda: { type: Date, required: true },
  valor_total: { type: Number },
  pontos_ganhos_total: { type: Number },
  // No dump original cliente e funcionario sao apenas os codigos numericos
  // deles; Mixed aceita tanto esse formato quanto o documento completo da
  // pessoa embarcado na venda.
  id_cliente: { type: mongoose.Schema.Types.Mixed },
  id_funcionario: { type: mongoose.Schema.Types.Mixed },
  // Itens vendidos: id_produto, nome_produto, quantidade, preco_unitario,
  // desconto e pontos_ganhos_unit.
  itens: {
    type: [mongoose.Schema.Types.Mixed],
    default: [],
  },
  pagamentos: {
    type: [pagamentoSchema],
    default: [],
  },
});

const Venda = mongoose.model("Venda", vendaSchema);

export { Venda, vendaSchema };
