const Personagem = require("./../models/personagens");

function validaEntrada(requisicao) {
  if (!req.body.nome) {
    res.status(400).json({ message: "Nome não inserido." });
    return;
  } else if (!req.body.imagemUrl) {
    res.status(400).json({ message: "Imagem não inserida." });
    return;
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
  if (req.params.id.length == 24) {
    await Personagem.findById(req.params.id)
      .then((personagem) => {
        res.status(200).json(personagem);
      })
      .catch((err) => {
        res.status(400).json({ message: "ERROR!!!" });
        console.error(err);
      });
  }
  res.status(400).json({ message: "ERROR!!!" });
};

exports.postCreate = async (req, res) => {
  validaEntrada(req.body.nome);
  validaEntrada(req.body.imagemUrl);

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
  if (!req.body.nome) {
    res.status(400).json({ message: "Nome não inserido." });
    return;
  } else if (!req.body.imagemUrl) {
    res.status(400).json({ message: "Imagem não inserida." });
    return;
  }
  if (req.params.id.length == 24) {
    await Personagem.findByIdAndUpdate(req.params.id, req.body)
      .then((personagem) => {
        res.status(200).json({ message: "Atualizado." });
      })
      .catch((err) => {
        res.status(400).json({ message: "ERROR!!!" });
        console.error(err);
      });
  }
  res.status(400).json({ message: "ERROR!!!" });
};

exports.getDelete = async (req, res) => {
  if (req.params.id.length == 24) {
    await Personagem.findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: "Deletado" });
      })
      .catch((err) => {
        res.status(404).json({ message: "ERROR!!!" });
        console.error(err);
      });
  }
  res.status(400).json({ message: "ERROR!!!" });
};
