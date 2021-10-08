import {EmailValidator, UrlValidator} from './validation';

let emailExamples = ["lala@", "lala@lalala", "emotton@gmail.com"];
let urlExamples = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];

emailExamples.forEach(email => {
    console.log(email+' '+EmailValidator.isValid(email));
});
 
urlExamples.forEach(url => {
    console.log(url+' '+UrlValidator.isValid(url));
})