import { Pessoa } from "../models/Pessoa.js";

function escapeRegExp(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getAllPessoas() {
  const pessoas = await Pessoa.find();
  return pessoas;
}

async function getPessoaPorId(id) {
  const pessoa = await Pessoa.findById(id);
  if (!pessoa) {
    throw new Error("Pessoa não encontrada");
  }
  return pessoa;
}

async function getPessoaPorNome(nome) {
  const regex = new RegExp(escapeRegExp(nome), "i");
  const pessoas = await Pessoa.find({ nome: regex });
  if (!pessoas.length) {
    throw new Error("Pessoa não encontrada");
  }
  return pessoas;
}

// Filtra por "Cliente" ou "Funcionario" — usado pelo dashboard e pelas
// ferramentas MCP para separar os dois publicos.
async function getPessoasPorTipo(tipo) {
  const pessoas = await Pessoa.find({ tipo_pessoa: tipo });
  return pessoas;
}

async function inserePessoa(dados) {
  const novaPessoa = new Pessoa(dados);
  const pessoaSalva = await novaPessoa.save();
  return pessoaSalva;
}

async function modificaPessoa(id, modificacoes) {
  const pessoaAtualizada = await Pessoa.findByIdAndUpdate(id, modificacoes, {
    new: true,
    runValidators: true,
  });
  if (!pessoaAtualizada) {
    throw new Error("Pessoa não encontrada para modificação");
  }
  return pessoaAtualizada;
}

async function deletarPessoa(id) {
  const pessoaDeletada = await Pessoa.findByIdAndDelete(id);
  if (!pessoaDeletada) {
    throw new Error("Pessoa não encontrada para exclusão");
  }
  return pessoaDeletada;
}

export {
  getAllPessoas,
  getPessoaPorId,
  getPessoaPorNome,
  getPessoasPorTipo,
  inserePessoa,
  modificaPessoa,
  deletarPessoa,
};
