"use strict";
let alunos = new Set();
alunos.add('Eduardo').add('Henrique').add('Célia').add('Bheatriz');
console.log(alunos);
for (let aluno of alunos) {
    console.log(aluno);
}
let alunosAprovados = new Set([
    'Eduardo', 'Pedro', 'Maria'
]);
console.log(alunosAprovados.has('Eduardo')); // true
console.log(alunosAprovados.delete('Maria')); // true
console.log(alunosAprovados.size);
alunosAprovados.clear();
