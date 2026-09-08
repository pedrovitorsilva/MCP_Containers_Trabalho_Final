import {
  getAllResgates,
  getResgate,
  getResgatesPorCliente,
  createResgate,
  updateResgate,
  deleteResgate,
} from "../services/services_resgate.js";
import mongoose from "mongoose";

async function getAllResgatesController(req, res) {
  try {
    const resgates = await getAllResgates();
    res.status(200).json(resgates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getResgateController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const resgate = await getResgate(id);
      res.status(200).json(resgate);
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getResgatesPorClienteController(req, res) {
  try {
    const idCliente = req.params.idCliente;
    if (!idCliente || Number.isNaN(Number(idCliente))) {
      return res.status(422).json({ error: "Cliente inválido" });
    }
    const resgates = await getResgatesPorCliente(idCliente);
    res.status(200).json(resgates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createResgateController(req, res) {
  try {
    const dados = req.body;
    if (dados.id_cliente && dados.itens_resgatados) {
      const resgate = await createResgate(dados);
      res.status(201).json({ message: "Resgate criado com sucesso", resgate });
    } else {
      res.status(422).json({
        error: 'Os campos "id_cliente" e "itens_resgatados" são obrigatórios',
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateResgateController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const resgate = await updateResgate(id, req.body);
      res
        .status(200)
        .json({ message: "Resgate atualizado com sucesso", resgate });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteResgateController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const resgate = await deleteResgate(id);
      res
        .status(200)
        .json({ message: "Resgate excluído com sucesso", resgate });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getAllResgatesController,
  getResgateController,
  getResgatesPorClienteController,
  createResgateController,
  updateResgateController,
  deleteResgateController,
};
