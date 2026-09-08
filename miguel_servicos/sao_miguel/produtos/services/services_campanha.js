import { Campanha } from "../models/Campanha.js";

function escapeRegExp(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getTodasCampanhas() {
  const campanhas = await Campanha.find();
  return campanhas;
}

async function getCampanhaPorId(id) {
  const campanha = await Campanha.findById(id);
  if (!campanha) {
    throw new Error("Campanha não encontrada");
  }
  return campanha;
}

async function getCampanhaPorDescricao(descricao) {
  const regex = new RegExp(escapeRegExp(descricao), "i");
  const campanhas = await Campanha.find({ descricao: regex });
  if (!campanhas.length) {
    throw new Error("Campanha não encontrada");
  }
  return campanhas;
}

// Campanhas cuja janela de vigencia contem a data informada (padrao: agora).
async function getCampanhasAtivas(referencia = new Date()) {
  const campanhas = await Campanha.find({
    data_inicio: { $lte: referencia },
    data_termino: { $gte: referencia },
  });
  return campanhas;
}

async function insereCampanha(campanhaNova) {
  const novaCampanha = new Campanha(campanhaNova);
  const campanhaSalva = await novaCampanha.save();
  return campanhaSalva;
}

async function modificaCampanha(id, modificacoes) {
  const campanhaAtual = await Campanha.findByIdAndUpdate(id, modificacoes, {
    new: true,
    runValidators: true,
  });
  if (!campanhaAtual) {
    throw new Error("Campanha não encontrada para modificação");
  }
  return campanhaAtual;
}

async function deletarCampanhaPorId(id) {
  const campanha = await Campanha.findByIdAndDelete(id);
  if (!campanha) {
    throw new Error("Campanha não encontrada para deletar");
  }
  return campanha;
}

export {
  getTodasCampanhas,
  getCampanhaPorId,
  getCampanhaPorDescricao,
  getCampanhasAtivas,
  insereCampanha,
  modificaCampanha,
  deletarCampanhaPorId,
};
