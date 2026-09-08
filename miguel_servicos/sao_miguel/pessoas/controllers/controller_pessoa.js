import {
  getAllPessoas,
  getPessoaPorId,
  getPessoaPorNome,
  getPessoasPorTipo,
  inserePessoa,
  modificaPessoa,
  deletarPessoa,
} from "../services/services_pessoa.js";
import mongoose from "mongoose";

async function getPessoas(req, res) {
  try {
    const dados = await getAllPessoas();
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getClientes(req, res) {
  try {
    const dados = await getPessoasPorTipo("Cliente");
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getFuncionarios(req, res) {
  try {
    const dados = await getPessoasPorTipo("Funcionario");
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPessoa(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const dados = await getPessoaPorId(id);
      res.status(200).json(dados);
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getPessoaPorNomeController(req, res) {
  try {
    const nome = req.params.nome;
    if (!nome || nome.trim() === "") {
      return res.status(422).json({ error: "Nome inválido" });
    }
    const pessoas = await getPessoaPorNome(nome);
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function postPessoa(req, res) {
  try {
    const dados = req.body;
    if (dados.nome && dados.tipo_pessoa) {
      const pessoa = await inserePessoa(dados);
      res.status(201).json({ message: "Pessoa criada com sucesso", pessoa });
    } else {
      res
        .status(422)
        .json({ error: "Os campos nome e tipo_pessoa são obrigatórios" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function patchPessoa(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const pessoa = await modificaPessoa(id, req.body);
      res
        .status(200)
        .json({ message: "Pessoa modificada com sucesso", pessoa });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePessoa(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const pessoa = await deletarPessoa(id);
      res.status(200).json({ message: "Pessoa excluída com sucesso", pessoa });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getPessoas,
  getClientes,
  getFuncionarios,
  getPessoa,
  getPessoaPorNomeController,
  postPessoa,
  patchPessoa,
  deletePessoa,
};
