import { Router } from "express";
import {
  obterEntradas,
  obterEntradaPorId,
  obterEntradaPorNomeProduto,
  criarNovaEntrada,
  atualizarEntradaPorId,
  deletarEntradaPorId,
} from "../controllers/controller_entrada.js";

const router = Router();

router.get("/", obterEntradas);
router.get("/produto/:nomeProduto", obterEntradaPorNomeProduto);
router.get("/:id", obterEntradaPorId);
router.post("/", criarNovaEntrada);
router.patch("/:id", atualizarEntradaPorId);
router.delete("/:id", deletarEntradaPorId);

export default router;
