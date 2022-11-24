"use strict";
let sum = 0;
function func(arr) {
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}

console.log(func([1, 2, 3, 4, 5]));