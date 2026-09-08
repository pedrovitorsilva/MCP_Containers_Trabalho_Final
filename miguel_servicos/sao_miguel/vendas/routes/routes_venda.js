import { Router } from "express";
import {
  obterVendas,
  obterVendaPorId,
  obterVendasPorCliente,
  criarNovaVenda,
  atualizarVendaPorId,
  deletarVendaPorId,
} from "../controllers/controller_venda.js";

const router = Router();

router.get("/", obterVendas);
// A rota literal vem antes de "/:id" para nao ser capturada por ele.
router.get("/cliente/:idCliente", obterVendasPorCliente);
router.get("/:id", obterVendaPorId);
router.post("/", criarNovaVenda);
router.patch("/:id", atualizarVendaPorId);
router.delete("/:id", deletarVendaPorId);

export default router;
