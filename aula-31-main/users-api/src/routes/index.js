const express = require("express");
const router = express.Router();

const server = express();

const rotasDeUsuario = require ("../routes/rotasDeUsuario");

router.get("/", (_req, res) => res.status(200).send("Olá Mundo!"))

server.use("/usuarios", rotasDeUsuario);

module.exports = server;