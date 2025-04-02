var http = require('http');
var url = require('url');
var PORT = 8000;
var Main = require('./main.js').Main;
var server = http.createServer(function (req, res) {
    const urlCapturada = url.parse(req.url, true);
    const {query, pathname} = urlCapturada;
    if (pathname === '/soma') {
        let resultado = Main.soma(Number(query.a), Number(query.b));
        res.end("Soma = " + resultado);
    }else if (pathname === '/subtracao') {
        let resultado = Main.subtracao(Number(query.a), Number(query.b));
        res.end("Subtração = " + resultado);
    }else if (pathname === '/multi'){
        let resultado = Main.multiplicacao(Number(query.a), Number(query.b));
        res.end("Multiplicação = " + resultado);
    }else if (pathname === '/divisao'){
        let resultado = Main.divisao(Number(query.a), Number(query.b));
        res.end("Divisão = " + resultado);
    }else{
        res.statusCode = 404;
        res.end("Pagina não encontrada");
    }
});
server.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT, "/"));
});