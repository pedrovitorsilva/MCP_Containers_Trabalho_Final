import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
  {
    tipo_pessoa: {
      type: String,
      enum: ["Cliente", "Funcionario"],
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      unique: true,
      sparse: true,
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
      cidade: {
        type: String,
      },
      uf: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

export { Pessoa, pessoaSchema };
