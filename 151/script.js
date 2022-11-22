"use strict";

console.log('1-----------------------------------');
console.log(Math.pow(2, 10));

console.log('2-----------------------------------');
console.log(Math.sqrt(245));

console.log('3-----------------------------------');
let arr3 = [4, 2, 5, 19, 13, 0, 10];
let sum3 = 0;

for (let elem3 of arr3) {
    sum3 += elem3;
}

console.log(Math.sqrt(Math.pow(sum3, 3)));

console.log('4-----------------------------------');
console.log(Math.round(Math.sqrt(379)));

console.log('5-----------------------------------');
let obj5 = {};
let num5 = 587;
obj5['floor'] = Math.floor(Math.sqrt(num5));
obj5['ceil'] = Math.ceil(Math.sqrt(num5))
console.log(obj5);

console.log('6-----------------------------------');
let arr6 = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max.apply(null, arr6));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

console.log('7-----------------------------------');
let min7 = 1;
let max7 = 100;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(min7, max7));

console.log('8-----------------------------------');
let arr8 = [];
for (let i8 = 0; i8 <= 10; i8++) {
    arr8[i8] = Math.round(Math.random());
}

console.log(arr8);

console.log('9-----------------------------------');
let a = 0;
let b = 1;
console.log(Math.abs(a - b));