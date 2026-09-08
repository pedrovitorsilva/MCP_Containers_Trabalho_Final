import mongoose from "mongoose";

const campanhaSchema = new mongoose.Schema({
  data_inicio: {
    type: Date,
    required: true,
  },
  data_termino: {
    type: Date,
    required: true,
  },
  descricao: {
    type: String,
  },
  tipo_desconto: {
    type: String,
    required: true,
  },
});

const Campanha = mongoose.model("Campanha", campanhaSchema);

export { Campanha, campanhaSchema };
