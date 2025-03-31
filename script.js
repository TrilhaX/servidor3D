var http = require('http');
var PORT = 3724;
var Main = require('./main.js').Main;
var server = http.createServer(function (req, res) {
    const valor = (req.url.replace('?', '').replace('/', '').split('&'));
    let parametros = {}
    for (item in valor){
        let chaveValor = valor[item].split('=');    
        parametros[chaveValor[0]] = Number(chaveValor[1])
    }
    let resultado = 0
    resultado = Main.soma(parametros.a, parametros.b);
    res.end("Soma = " + resultado);
});
server.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT, "/"));
});
