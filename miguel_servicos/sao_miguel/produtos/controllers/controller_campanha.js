import {
  getTodasCampanhas,
  getCampanhaPorId,
  getCampanhaPorDescricao,
  getCampanhasAtivas,
  insereCampanha,
  modificaCampanha,
  deletarCampanhaPorId,
} from "../services/services_campanha.js";
import mongoose from "mongoose";

async function getCampanhas(req, res) {
  try {
    const campanhas = await getTodasCampanhas();
    res.status(200).json(campanhas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCampanhasAtivasController(req, res) {
  try {
    const campanhas = await getCampanhasAtivas();
    res.status(200).json(campanhas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCampanha(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const campanha = await getCampanhaPorId(id);
      res.status(200).json(campanha);
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getCampanhaPorDescricaoController(req, res) {
  try {
    const descricao = req.params.descricao;
    if (!descricao || descricao.trim() === "") {
      return res.status(422).json({ error: "Descrição inválida" });
    }
    const campanhas = await getCampanhaPorDescricao(descricao);
    res.status(200).json(campanhas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function postCampanha(req, res) {
  try {
    const campanhaNova = req.body;
    // A campanha nao possui "nome"; os campos obrigatorios do schema sao
    // data_inicio, data_termino e tipo_desconto.
    if (
      campanhaNova.data_inicio &&
      campanhaNova.data_termino &&
      campanhaNova.tipo_desconto
    ) {
      const campanha = await insereCampanha(campanhaNova);
      res
        .status(201)
        .json({ message: "Campanha criada com sucesso", campanha });
    } else {
      res.status(422).json({
        error:
          "Os campos data_inicio, data_termino e tipo_desconto são obrigatórios",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function patchCampanha(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const campanha = await modificaCampanha(id, req.body);
      res
        .status(200)
        .json({ message: "Campanha modificada com sucesso", campanha });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteCampanha(req, res) {
  try {
    const id = req.params.id;
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      const campanha = await deletarCampanhaPorId(id);
      res
        .status(200)
        .json({ message: "Campanha deletada com sucesso", campanha });
    } else {
      res.status(422).json({ error: "ID inválido" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getCampanhas,
  getCampanhasAtivasController,
  getCampanha,
  getCampanhaPorDescricaoController,
  postCampanha,
  patchCampanha,
  deleteCampanha,
};
