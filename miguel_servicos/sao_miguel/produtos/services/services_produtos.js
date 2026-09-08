import { Produto } from "../models/Produto.js";

function escapeRegExp(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getAllProducts() {
  const products = await Produto.find();
  return products;
}

async function getProduct(id) {
  const product = await Produto.findById(id);
  if (!product) {
    throw new Error("Produto não encontrado");
  }
  return product;
}

async function getProductByDescription(descricao) {
  const products = await Produto.find({
    descricao: { $regex: escapeRegExp(descricao), $options: "i" },
  });
  if (!products.length) {
    throw new Error("Nenhum produto encontrado com a descrição fornecida");
  }
  return products;
}

async function getProductByBarCode(codigo_barras) {
  const product = await Produto.findOne({ codigo_barras });
  if (!product) {
    throw new Error("Nenhum produto encontrado com o código de barras fornecido");
  }
  return product;
}

async function createProduct(dados) {
  const newProduct = new Produto(dados);
  const savedProduct = await newProduct.save();
  return savedProduct;
}

async function updateProduct(id, modificacoes) {
  const updatedProduct = await Produto.findByIdAndUpdate(id, modificacoes, {
    new: true,
    runValidators: true,
  });
  if (!updatedProduct) {
    throw new Error("Produto não encontrado");
  }
  return updatedProduct;
}

async function deleteProduct(id) {
  const deletedProduct = await Produto.findByIdAndDelete(id);
  if (!deletedProduct) {
    throw new Error("Produto não encontrado");
  }
  return deletedProduct;
}

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByDescription,
  getProductByBarCode,
};
