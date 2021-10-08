"use strict";
// this no caso de objeto javascript, retorna ou se referencia
// ao próprio objeto
// no caso de utilizar em browser, o this utilizado como arrowFunction
// retornará o "window", pois com arrowFunction não está mais acoplado
// diretamente ao objeto em si.
// no caso, se for colocado no tsconfig.json "noImplicitThis": false
// ele será permitido, no entanto, não retornará nada.
// de forma que, se for para ser utilizado no browser, será permitido.
let objThis = {
    name: 'Eduardo',
    idade: 51,
    mostrar: function () {
        return this;
    },
    mostrar2: () => {
        return this; // Aqui não funciona
    }
};
console.log(objThis.mostrar());
console.log(objThis.mostrar2());
let sorteio = {
    names: ['banana', 'abacaxi', 'uva'],
    createSorteio: function () {
        // tudo visivel no primeiro nivel
        console.log(this.names);
    },
    retornaSorteio: function () {
        return function () {
            // inicialmente não retorna pois está no segundo nivel
            console.log(this.names);
        };
    },
    retornaSorteio2: function () {
        return () => {
            // com arrow function retorna novamente sem problemas
            let sorteio = Math.floor(Math.random() * 3);
            return { sorteado: this.names[sorteio] };
        };
    }
};
sorteio.createSorteio();
console.log(sorteio.retornaSorteio2()());
