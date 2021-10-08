"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("./validation");
let emailExamples = ["lala@", "lala@lalala", "emotton@gmail.com"];
let urlExamples = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];
emailExamples.forEach(email => {
    console.log(email + ' ' + validation_1.EmailValidator.isValid(email));
});
urlExamples.forEach(url => {
    console.log(url + ' ' + validation_1.UrlValidator.isValid(url));
});
