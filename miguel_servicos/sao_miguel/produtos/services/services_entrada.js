import { Entrada } from "../models/Entrada.js";

function escapeRegExp(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function lerEntradas() {
  const entradas = await Entrada.find();
  return entradas;
}

async function pegarEntradaPorId(id) {
  const entrada = await Entrada.findById(id);
  if (!entrada) {
    throw new Error("Entrada não encontrada.");
  }
  return entrada;
}

async function pegarEntradaPorNomeProduto(nomeProduto) {
  const regex = new RegExp(escapeRegExp(nomeProduto), "i");
  const entradas = await Entrada.find({ "itens.nome_produto": regex });
  if (!entradas.length) {
    throw new Error("Entrada não encontrada.");
  }
  return entradas;
}

async function adicionarEntrada(novaEntrada) {
  const entrada = new Entrada(novaEntrada);
  const entradaSalva = await entrada.save();
  return entradaSalva;
}

async function atualizarEntrada(id, entradaAtualizada) {
  const entrada = await Entrada.findByIdAndUpdate(id, entradaAtualizada, {
    new: true,
    runValidators: true,
  });
  if (!entrada) {
    throw new Error("Entrada não encontrada.");
  }
  return entrada;
}

async function deletarEntrada(id) {
  const entrada = await Entrada.findByIdAndDelete(id);
  if (!entrada) {
    throw new Error("Entrada não encontrada.");
  }
  return entrada;
}

export {
  lerEntradas,
  pegarEntradaPorId,
  pegarEntradaPorNomeProduto,
  adicionarEntrada,
  atualizarEntrada,
  deletarEntrada,
};
