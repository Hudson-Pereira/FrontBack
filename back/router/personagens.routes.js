const express = require("express");
const router = express.Router();
const PersonagemController = require("./../controller/personagens.controller"); //importando arquivo da controller

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota personagens OK" });
});
//apenas rota fica no arquivo de rota
router.get("/readAll", PersonagemController.getAll);
//rota("/caminho", nome do controller.funcao para executar)

router.get("/readSingle/:id", PersonagemController.getSingle);

router.post("/create", PersonagemController.postCreate);

router.put("/update/:id", PersonagemController.putUpdate);

router.delete("/delete/:id", PersonagemController.delDelete);

module.exports = router;
