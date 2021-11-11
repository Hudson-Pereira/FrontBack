const Personagem = require("./../models/personagens");

function validaEntrada(res, requisicao) {
  if (!requisicao.nome) {
    res.status(400).json({ message: "Nome não inserido." });
    return;
  } else if (!requisicao.imagemUrl) {
    res.status(400).json({ message: "Imagem não inserida." });
    return;
  }
}

function validaId(res, id) {
  if (id.length != 24) {
    return res.status(400).json({ message: "O id precisa ter 24 caracteres" });
  }
}

exports.getAll = async (req, res) => {
  await Personagem.find({})
    .then((personagens) => {
      res.status(200).json(personagens);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!!" });
      console.error(err);
    });
};

exports.getSingle = async (req, res) => {
  validaId(res, req.params.id);
  await Personagem.findById(req.params.id)
    .then((personagem) => {
      res.status(200).json(personagem);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.postCreate = async (req, res) => {
  validaEntrada(res, req.body);
  await Personagem.create(req.body)
    .then(() => {
      res.status(201).json({ message: "Personagem inserido corretamente." });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  validaId(res, req.params.id);
  validaEntrada(res, req.body);
  await Personagem.findByIdAndUpdate(req.params.id, req.body)
    .then((personagem) => {
      res.status(200).json({ message: "Atualizado." });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.delDelete = async (req, res) => {
  validaId(res, req.params.id);
  await Personagem.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Deletado" });
    })
    .catch((err) => {
      res.status(404).json({ message: "ERROR!!!" });
      console.error(err);
    });
};
