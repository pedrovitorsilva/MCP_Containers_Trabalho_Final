import { Router } from "express";
import {
  getCampanhas,
  getCampanhasAtivasController,
  getCampanha,
  getCampanhaPorDescricaoController,
  postCampanha,
  patchCampanha,
  deleteCampanha,
} from "../controllers/controller_campanha.js";

const router = Router();

router.get("/", getCampanhas);
router.get("/ativas", getCampanhasAtivasController);
router.get("/descricao/:descricao", getCampanhaPorDescricaoController);
router.get("/:id", getCampanha);
router.post("/", postCampanha);
router.patch("/:id", patchCampanha);
router.delete("/:id", deleteCampanha);

export default router;
