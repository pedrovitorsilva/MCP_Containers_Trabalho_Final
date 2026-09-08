import { Venda } from "../models/Venda.js";

async function lerVendas() {
  const vendas = await Venda.find().sort({ data_venda: -1 });
  return vendas;
}

async function pegarVendaPorId(id) {
  const venda = await Venda.findById(id);
  if (!venda) {
    throw new Error("Venda não encontrada.");
  }
  return venda;
}

// Historico de compras de um cliente. O dump original guarda apenas o codigo
// numerico do cliente na venda, por isso a busca aceita os dois formatos.
async function pegarVendasPorCliente(idCliente) {
  const codigo = Number(idCliente);
  const filtro = Number.isNaN(codigo)
    ? { "id_cliente.nome": idCliente }
    : { $or: [{ id_cliente: codigo }, { "id_cliente.id": codigo }] };

  const vendas = await Venda.find(filtro).sort({ data_venda: -1 });
  return vendas;
}

async function adicionarVenda(novaVenda) {
  const venda = new Venda(novaVenda);
  const vendaSalva = await venda.save();
  return vendaSalva;
}

async function atualizarVenda(id, vendaAtualizada) {
  const venda = await Venda.findByIdAndUpdate(id, vendaAtualizada, {
    new: true,
    runValidators: true,
  });
  if (!venda) {
    throw new Error("Venda não encontrada.");
  }
  return venda;
}

async function deletarVenda(id) {
  const venda = await Venda.findByIdAndDelete(id);
  if (!venda) {
    throw new Error("Venda não encontrada.");
  }
  return venda;
}

export {
  lerVendas,
  pegarVendaPorId,
  pegarVendasPorCliente,
  adicionarVenda,
  atualizarVenda,
  deletarVenda,
};
