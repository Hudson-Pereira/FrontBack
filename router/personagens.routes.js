const express = require("express");
const router = express.Router();
const Personagem = require("./../models/personagens"); //importanto modelo do mongoose

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota personagens OK" });
});

router.get("/readAll", async (req, res) => {
  await Personagem.find({})
    .then((personagens) => {
      res.status(200).json(personagens);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!!" });
      console.error(err);
    });
});

router.get("/readSingle/:id", async (req, res) => {
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
});

router.post("/create", async (req, res) => {
  await Personagem.create(req.body)
    .then(() => {
      res.status(201).json({ message: "Personagem inserido corretamente." });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
});

router.put("/update/:id", async (req, res) => {
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
});

router.delete("/delete/:id", async (req, res) => {
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
});

module.exports = router;
