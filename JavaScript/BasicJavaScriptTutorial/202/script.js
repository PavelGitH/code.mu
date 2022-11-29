"use strict";

console.log('1-----------------------------------');
let arr1 = [2, 4, 6, 8];
console.log(arr1.some(elem => elem > 0));



console.log('2-----------------------------------');
let arr2 = [2, 4, 6, 8, 9];
console.log(arr2.some((elem, index) => elem * index > 30));