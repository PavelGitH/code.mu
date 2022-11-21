"use strict";

let arr = [5, -9, 6, -7, 3];
let sum = 0;

for (let elem of arr) {
    if (elem > 0) {
        sum += elem;
    }
}
console.log(sum);