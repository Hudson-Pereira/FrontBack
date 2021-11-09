const express = require("express");
const router = express.Router();
const Personagem = require("./../models/personagens");

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
  await Personagem.findById(req.params.id)
    .then((personagem) => {
      res.status(200).json(personagem);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
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

module.exports = router;
