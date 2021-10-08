"use strict";
class Carro {
    constructor(nome, fabricante) {
        console.log("contruiu por aqui");
        this._nome = nome;
        this._fabricante = fabricante;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        console.log("setou por aqui");
        this._nome = value;
    }
    get fabricante() {
        return this._fabricante;
    }
    set fabricante(value) {
        this._fabricante = value;
    }
}
let c1 = new Carro("Palio", 'Fiat');
c1.nome = "PALIO";
console.log(c1);
