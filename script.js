var http = require('http');
var url = require('url');
var PORT = 3724;
var Main = require('./main.js').Main;
var server = http.createServer(function (req, res) {
    const urlCapturada = url.parse(req.url, true);
    const {query} = urlCapturada;
    let resultado = Main.soma(Number(query.a), Number(query.b));
    res.end("Soma = " + resultado);
});
server.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT, "/"));
});
