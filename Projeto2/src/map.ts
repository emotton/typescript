let nameAge = new Map<string, number>();

nameAge.set('Eduardo', 51);
nameAge.set('Henrique', 22);

console.log(nameAge);

// pode-se encadear

nameAge.set('Bheatriz', 15).set('Célia', 38);

console.log(nameAge);

// outra forma
let notas = new Map<string,number>([
    ['eduardo', 10], ['henrique', 9.5]
]);

console.log(notas);

for(let key of notas.keys()){
    console.log(key);
}

console.log(notas.get('eduardo'));  // 10
console.log(notas.has('eduardo'));  // true

console.log(notas.delete('eduardo'));  // true
console.log(notas);

for(let v of nameAge.values()){
    console.log(v);
}

for(let entry of nameAge.entries()){
    console.log(`${entry[0]} | ${entry[1]}`)
}

for(let [key, value] of nameAge.entries()){
    console.log(`${key} | ${value}`)
}

nameAge.clear();
console.log(nameAge);
console.log(nameAge.size);