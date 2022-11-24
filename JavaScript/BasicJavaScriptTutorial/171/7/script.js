"use strict";

let arr = [];
function func(num) {
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(func(22));