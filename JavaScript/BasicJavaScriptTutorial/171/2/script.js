"use strict";
let arr = [];
function func(num) {
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(func(88));