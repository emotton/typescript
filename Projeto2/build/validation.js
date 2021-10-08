"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlValidator = exports.EmailValidator = void 0;
let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
class EmailValidator {
    static isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidator = EmailValidator;
class UrlValidator {
    static isValid(str) {
        return urlRegex.test(str);
    }
}
exports.UrlValidator = UrlValidator;
// Existem diversos formatos de exportação de módulos
// commonJS é utilizado no node
// Existem AMD, ES6, etc.
