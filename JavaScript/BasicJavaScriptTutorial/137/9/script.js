"use strict";

let arr = [1, 2, 9, 5, 68, 52];
let sum = 0;

for (let elem of arr) {
    sum += elem ** 2;
}

console.log(sum);