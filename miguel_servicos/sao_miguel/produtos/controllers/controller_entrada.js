import {
  lerEntradas,
  pegarEntradaPorId,
  pegarEntradaPorNomeProduto,
  adicionarEntrada,
  atualizarEntrada,
  deletarEntrada,
} from "../services/services_entrada.js";
import mongoose from "mongoose";

async function obterEntradas(req, res) {
  try {
    const entradas = await lerEntradas();
    res.status(200).json(entradas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obterEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const entrada = await pegarEntradaPorId(id);
      res.status(200).json(entrada);
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function obterEntradaPorNomeProduto(req, res) {
  try {
    const nomeProduto = req.params.nomeProduto;
    if (!nomeProduto || nomeProduto.trim() === "") {
      return res.status(422).json({ error: "O nome do produto é obrigatório" });
    }
    const entradas = await pegarEntradaPorNomeProduto(nomeProduto);
    res.status(200).json(entradas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function criarNovaEntrada(req, res) {
  try {
    const novaEntrada = req.body;
    if (novaEntrada && novaEntrada.data_entrada) {
      const entrada = await adicionarEntrada(novaEntrada);
      res.status(201).json({ message: "Entrada criada com sucesso", entrada });
    } else {
      res.status(422).json({ error: 'O campo "data_entrada" é obrigatório' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function atualizarEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const entrada = await atualizarEntrada(id, req.body);
      res
        .status(200)
        .json({ message: "Entrada atualizada com sucesso", entrada });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletarEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const entrada = await deletarEntrada(id);
      res
        .status(200)
        .json({ message: "Entrada deletada com sucesso", entrada });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  obterEntradas,
  obterEntradaPorId,
  obterEntradaPorNomeProduto,
  criarNovaEntrada,
  atualizarEntradaPorId,
  deletarEntradaPorId,
};
