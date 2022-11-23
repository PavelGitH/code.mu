"use strict";

console.log('1-----------------------------------');
function func1(num) {
    return num ** 3;
}
let res = func1(3);
console.log(res);

console.log('2-----------------------------------');
function func2(num) {
    return Math.sqrt(num);
}

console.log(func2(3) + func2(4));