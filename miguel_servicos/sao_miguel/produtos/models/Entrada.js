import mongoose from "mongoose";

const entradaSchema = new mongoose.Schema({
  data_entrada: { type: Date, required: true },
  valor_total: { type: Number },
  // No dump original o fornecedor e apenas o codigo numerico dele; Mixed aceita
  // tanto esse formato quanto o documento completo da pessoa (fornecedor).
  id_fornecedor: { type: mongoose.Schema.Types.Mixed },
  // Itens da nota de entrada: id_produto, nome_produto, quantidade e
  // valor_unitario_custo.
  itens: {
    type: [mongoose.Schema.Types.Mixed],
    default: [],
  },
});

const Entrada = mongoose.model("Entrada", entradaSchema);

export { Entrada, entradaSchema };
