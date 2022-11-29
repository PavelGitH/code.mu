"use strict";

console.log('1-----------------------------------');
let arr1 = [2, 4, 6, 8];
console.log(arr1.every(elem => elem > 0));



console.log('2-----------------------------------');
let arr2 = [2, 4, 6, 8];
console.log(arr2.every((elem, index) => elem * index < 0));