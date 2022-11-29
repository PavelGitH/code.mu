"use strict";

console.log('1-----------------------------------');
let arr1 = [1, 2, -3, 4, 5];
console.log(arr1.filter(elem => elem > 0));



console.log('2-----------------------------------');
let arr2 = [1, 2, -3, 4, 5];
console.log(arr2.filter(elem => elem < 0));



console.log('3-----------------------------------');
let arr3 = [1, 20, -3, 40, 5];
console.log(arr3.filter(elem => elem > 0 && elem < 10));



console.log('4-----------------------------------');
let arr4 = ['one', 'two', 'three', 'four', 'five'];
console.log(arr4.filter(elem => elem.length > 3));



console.log('5-----------------------------------');
let arr5 = [5, 6, 7, 8, 9];
console.log(arr5.filter((elem, index) => elem * index < 30));



console.log('6-----------------------------------');
let arr6 = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr6.filter(elem => typeof (elem) !== 'object'));



console.log('7-----------------------------------');
let arr7 = [5, -6, 7, -8, 9];
console.log((arr7.filter(elem => elem < 0)).length);