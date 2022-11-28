"use strict";

console.log('1-----------------------------------');
function every(arr, callback) {
    let result = [];
    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}
let result1 = every([1, 2, 3, 4, 5], elem => elem > 0);

console.log(result1);



console.log('2-----------------------------------');
let result2 = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

console.log(result2);



console.log('3-----------------------------------');
let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result3 = every(arr3, (elem, index) => elem * index > 10);

console.log(result3);