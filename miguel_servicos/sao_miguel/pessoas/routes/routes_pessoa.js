import { Router } from "express";
import {
  getPessoas,
  getClientes,
  getFuncionarios,
  getPessoa,
  getPessoaPorNomeController,
  postPessoa,
  patchPessoa,
  deletePessoa,
} from "../controllers/controller_pessoa.js";

const router = Router();

router.get("/", getPessoas);
// As rotas literais vem antes de "/:id" para nao serem capturadas por ele.
router.get("/clientes", getClientes);
router.get("/funcionarios", getFuncionarios);
router.get("/nome/:nome", getPessoaPorNomeController);
router.get("/:id", getPessoa);
router.post("/", postPessoa);
router.patch("/:id", patchPessoa);
router.delete("/:id", deletePessoa);

export default router;
