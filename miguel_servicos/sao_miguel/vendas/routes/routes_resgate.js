import { Router } from "express";
import {
  getAllResgatesController,
  getResgateController,
  getResgatesPorClienteController,
  createResgateController,
  updateResgateController,
  deleteResgateController,
} from "../controllers/controllers_resgate.js";

const router = Router();

router.get("/", getAllResgatesController);
// A rota literal vem antes de "/:id" para nao ser capturada por ele.
router.get("/cliente/:idCliente", getResgatesPorClienteController);
router.get("/:id", getResgateController);
router.post("/", createResgateController);
router.patch("/:id", updateResgateController);
router.delete("/:id", deleteResgateController);

export default router;
