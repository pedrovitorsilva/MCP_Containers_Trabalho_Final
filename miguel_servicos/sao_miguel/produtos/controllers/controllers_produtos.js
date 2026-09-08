import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByDescription,
  getProductByBarCode,
} from "../services/services_produtos.js";
import mongoose from "mongoose";

async function getAllProductsController(req, res) {
  try {
    const produtos = await getAllProducts();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const produto = await getProduct(id);
      res.status(200).json(produto);
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getProductByDescriptionController(req, res) {
  try {
    const { descricao } = req.params;
    if (!descricao || descricao.trim() === "") {
      return res.status(422).json({ error: "A descrição é obrigatória" });
    }
    const produtos = await getProductByDescription(descricao);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getProductByBarCodeController(req, res) {
  try {
    const { codigo_barras } = req.params;
    if (!codigo_barras || codigo_barras.trim() === "") {
      return res.status(422).json({ error: "O código de barras é obrigatório" });
    }
    const produto = await getProductByBarCode(codigo_barras);
    res.status(200).json(produto);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function createProductController(req, res) {
  try {
    const dados = req.body;
    if (dados.nome) {
      const produto = await createProduct(dados);
      res.status(201).json({ message: "Produto criado com sucesso", produto });
    } else {
      res.status(422).json({ error: 'Campo "nome" é obrigatório' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const produto = await updateProduct(id, req.body);
      res
        .status(200)
        .json({ message: "Produto modificado com sucesso", produto });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteProductController(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const produto = await deleteProduct(id);
      res
        .status(200)
        .json({ message: "Produto excluído com sucesso", produto });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getAllProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  getProductByDescriptionController,
  getProductByBarCodeController,
};
