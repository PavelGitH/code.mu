"use strict";

console.log('1-----------------------------------');
let i = 1;
function func(num) {
    while (true) {
        num /= 2;
        if (num < 10) {
            return i;
        }
        i++;
    }
}

console.log(func(1111));