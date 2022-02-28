"use strict";
const cli1 = {
    id: 1,
    title: "Eduardo Motton",
    description: "Eduardo Fratoni Motton",
};
function modificar(cliente, clienteUpdate) {
    return { ...cliente, ...clienteUpdate };
}
const novo = modificar(cli1, {
    title: "Eduardo F Motton",
});
console.log(novo);
