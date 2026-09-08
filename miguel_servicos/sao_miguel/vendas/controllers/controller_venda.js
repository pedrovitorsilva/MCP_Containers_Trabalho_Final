import {
  lerVendas,
  pegarVendaPorId,
  pegarVendasPorCliente,
  adicionarVenda,
  atualizarVenda,
  deletarVenda,
} from "../services/services_venda.js";
import mongoose from "mongoose";

async function obterVendas(req, res) {
  try {
    const vendas = await lerVendas();
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obterVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const venda = await pegarVendaPorId(id);
      res.status(200).json(venda);
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function obterVendasPorCliente(req, res) {
  try {
    const idCliente = req.params.idCliente;
    if (!idCliente) {
      return res.status(422).json({ error: "Cliente inválido" });
    }
    const vendas = await pegarVendasPorCliente(idCliente);
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function criarNovaVenda(req, res) {
  try {
    const novaVenda = req.body;
    if (novaVenda && novaVenda.data_venda) {
      const venda = await adicionarVenda(novaVenda);
      res.status(201).json({ message: "Venda criada com sucesso", venda });
    } else {
      res.status(422).json({ error: 'O campo "data_venda" é obrigatório' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function atualizarVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const venda = await atualizarVenda(id, req.body);
      res.status(200).json({ message: "Venda atualizada com sucesso", venda });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletarVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const venda = await deletarVenda(id);
      res.status(200).json({ message: "Venda deletada com sucesso", venda });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  obterVendas,
  obterVendaPorId,
  obterVendasPorCliente,
  criarNovaVenda,
  atualizarVendaPorId,
  deletarVendaPorId,
};
