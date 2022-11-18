"use strict";

console.log('1-----------------------------------');
let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);

console.log('2-----------------------------------');
let arr2 = [];

for (let i2 = 1; i2 <= 10; i2++) {
    arr2.push('x');
}

console.log(arr2);

console.log('3-----------------------------------');
let arr3 = [-1, 0, 5, -6, 9];
let arr31 = [];

for (let elem3 of arr3) {
    if (elem3 > 0) {
        arr31.push(elem3);
    }
}

console.log(arr31);