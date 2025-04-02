"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.soma = function (x, y) {
        return x + y;
    };
    Main.subtracao = function (x, y) {
        return x - y;
    }
    Main.multiplicacao = function (x,y){
        return x * y;
    }
    Main.divisao = function (x, y){
        if(y === 0){
            throw new Error("Divisão por zero não é permitida!");
        }
        return x / y;
    }
    return Main;
}());
exports.Main = Main;
