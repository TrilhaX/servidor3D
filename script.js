const express = require('express')
var PORT = 8000;
const Main = require('./main.js').Main;
const server = express();

server.get('/soma', (req, res) => {
    let resultado = Main.soma(Number(req.query.a), Number(req.query.b));
    res.send("Soma = " + resultado);
})

server.get(`/subtracao`, (req, res) => {
    let resultado = Main.subtracao(Number(req.query.a), Number(req.query.b));
    res.send("Subtração = " + resultado);
})

server.get(`/multi`, (req, res) => {
    let resultado = Main.multiplicacao(Number(req.query.a), Number(req.query.b));
    res.send("Multiplicação = " + resultado);
})

server.get(`/divisao`, (req, res) => {
    let resultado = Main.divisao(Number(req.query.a), Number(req.query.b));
    res.send("Divisão = " + resultado);
})

server.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT, "/"));
});