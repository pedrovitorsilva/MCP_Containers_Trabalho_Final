// Copia do schema de Pessoa mantida aqui de proposito: cada microsservico
// precisa ser autossuficiente. Este servico NAO registra o model "Pessoa"
// (isso e responsabilidade do miguel-pessoas); exporta apenas o schema, que
// pode ser embarcado dentro de uma Venda.
import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
  {
    tipo_pessoa: {
      type: String,
      enum: ["Cliente", "Funcionario"],
    },
    nome: {
      type: String,
    },
    cpf: {
      type: String,
    },
    cargo: {
      type: String,
    },
    telefone: {
      type: String,
    },
    pontos_acumulados: {
      type: Number,
      default: 0,
    },
    endereco: {
      cidade: { type: String },
      uf: { type: String },
    },
  },
  { _id: false },
);

export { pessoaSchema };
