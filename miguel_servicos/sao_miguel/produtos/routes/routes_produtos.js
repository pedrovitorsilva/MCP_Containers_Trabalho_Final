import { Router } from "express";
import {
  getAllProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  getProductByDescriptionController,
  getProductByBarCodeController,
} from "../controllers/controllers_produtos.js";

const router = Router();

router.get("/", getAllProductsController);
// As rotas literais vem antes de "/:id" para nao serem capturadas por ele.
router.get("/descricao/:descricao", getProductByDescriptionController);
router.get("/codigo/:codigo_barras", getProductByBarCodeController);
// Alias mantido por compatibilidade com o projeto monolitico original.
router.get("/barcode/:codigo_barras", getProductByBarCodeController);
router.get("/:id", getProductController);
router.post("/", createProductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
