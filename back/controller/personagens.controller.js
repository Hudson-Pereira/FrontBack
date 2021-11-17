const { listeners } = require("./../models/personagens");
const Personagem = require("./../models/personagens");

// function validaEntrada(dados) {
//   const listaErros = [];
//   var nome = {
//     vazio: false,
//     tamanho: true,
//     num: false,
//   };
//   var imagem = {
//     vazio: false,
//   };

//   if (!dados.nome) {
//     nome.vazio = true;
//   } else if (dados.nome.length > 50) {
//     nome.tamanho = true;
//   } else {
//     nome.tamanho = false;
//   }

//   if (!isNaN(dados.nome)) {
//     nome.num = true;
//   }

//   if (!dados.imagemUrl) {
//     imagem.vazio = true;
//   }

//   listaErros.push(nome);
//   listaErros.push(imagem);

//   console.log(listaErros);
//   return listaErros;
// }

function validaId(res, id) {
  if (id.length != 24) {
    res.status(400).json({ message: "O id precisa ter 24 caracteres" });
    return true;
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
  if (validaId(res, req.params.id)) {
    return;
  }
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
  if (!req.body.nome) {
    res.status(400).json({ message: "Nome vazio." });
    return;
  }
  if (!req.body.imagemUrl) {
    res.status(400).json({ message: "Imagem vazia." });
  }

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
  if (!req.body.nome) {
    res.status(400).json({ message: "Nome vazio." });
    return;
  }
  if (!req.body.imagemUrl) {
    res.status(400).json({ message: "Imagem vazia." });
  }
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
