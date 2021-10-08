"use strict";
function reverseList(list) {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ['Eduardo', 'Célia', 'Henrique', 'Bheatriz'];
console.log(reverseList(names));
let numbers = [1, 2, 3, 4, 5, 6];
console.log(reverseList(numbers));
// Desta forma ele não permitirá chamar pois os tipos são diferentes
// console.log(reverseList<string>(numbers));
// formata Arrow Function
let reverseListArrow = (list) => {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};
