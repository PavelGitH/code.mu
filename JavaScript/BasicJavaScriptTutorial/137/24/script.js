"use strict";

let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let sum1 = 0;
let sum2 = 0;

for (let key in obj) {
    sum1 += key;
    sum2 += obj[key];
}

console.log(sum1 / sum2);