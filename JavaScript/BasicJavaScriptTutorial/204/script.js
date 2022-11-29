"use strict";

console.log('1-----------------------------------');
let arr11 = [1, 2, 3];
let arr21 = [4, 5, 6];

let arr1  = ['a', ...arr11, 'b', 'c', ...arr21];
console.log(arr1);



console.log('2-----------------------------------');
let arr12 = [1, 2, 3];
let arr22 = [4, 5, 6];

let arr2  = ['a', ...arr12, ...arr22, 'b', 'c'];
console.log(arr2);



console.log('3-----------------------------------');
let arr13 = [1, 2, 3];
let arr23 = [...arr13, 4, 5, 6];

let arr3  = ['a', 'b', 'c', ...arr23];
console.log(arr3);



console.log('4-----------------------------------');
let arr14 = [1, 2, 3];
let arr24 = [...arr14, 4, 5, 6];
let arr34 = [...arr24, 7, 8, 9];

let arr4  = [0, ...arr34];
console.log(arr4);


console.log('5-----------------------------------');
let arr15 = [1, 2, 3];
let arr25 = [...arr15];

console.log(arr25);