"use strict";

console.log('1-----------------------------------');
let arr1 = [...'12345'];
console.log(arr1);



console.log('2-----------------------------------');
let arr2 = ['a', ...'12345'];
console.log(arr2);



console.log('3-----------------------------------');
let arr3 = [...'12345', ...'56789'];
console.log(arr3);



console.log('4-----------------------------------');
let arr14 = ['a', 'b', 'c'];
let arr24 = [...arr14, ...'12345'];

console.log(arr24);