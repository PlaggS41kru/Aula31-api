const express = require("express");
const router = express.Router();

const rotasDeUsuario = require("./rotasDeUsuario"); // Caminho corrigido

router.get("/", (_req, res) => res.status(200).send("Olá Mundo!"));

router.use("/usuarios", rotasDeUsuario); // Ajuste aqui

module.exports = router;
