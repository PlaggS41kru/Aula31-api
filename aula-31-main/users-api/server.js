const express = require("express");
const rotas = require("./src/routes"); // Caminho atualizado!

const server = express();
server.use(express.json()); // Middleware para JSON

server.use(rotas); // Importando as rotas corretamente

server.use((_req, res) => res.status(404).json({ erro: "Rota não existe" }));

server.listen(3000, () => console.log("Servidor está rodando na porta 3000!"));
