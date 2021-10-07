"use strict";
window.onload = function () {
    let nome = "Eduardo Motton";
    // Container
    var divContainer = document.createElement('div');
    divContainer.id = "divContainer";
    divContainer.className = "container";
    // Div
    var div1 = document.createElement('div');
    div1.id = "div1";
    div1.style.border = "thick solid #0000ff";
    div1.style.width = "320px";
    div1.style.textAlign = "center";
    // P
    var p = document.createElement('p');
    p.style.color = "#000";
    p.style.fontSize = "20px";
    p.innerText = `Eu fui criado pelo typescript pelo ${nome}`;
    // Appends
    div1.appendChild(p);
    divContainer.appendChild(div1);
    document.body.appendChild(divContainer);
};
