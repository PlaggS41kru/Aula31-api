const rotas = require("./routes")
const server = require("/.routes")

server.use(server.json());

server.use(rotas);

server.use((_req, res, _next) => 
    res.status(404).json({ erro: "Rota não existe"})
);

server.listen(3000, () => console.log("Servidor está rodando!"));
