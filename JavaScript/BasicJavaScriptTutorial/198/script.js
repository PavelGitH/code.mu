"use strict";

console.log('1-----------------------------------');
let arr1 = [1, 2, 3, 4, 5];

let result1 = arr1.map(function (elem) {
    return Math.sqrt(elem);
});

console.log(result1);



console.log('2-----------------------------------');
let arr2 = ['one', 'two', 'three', 'four', 'five'];

let result2 = arr2.map(function (elem) {
    return elem + '!';
});

console.log(result2);



console.log('3-----------------------------------');
let arr3 = ['one', 'two', 'three', 'four', 'five'];

let result3 = arr3.map(function (elem) {
    return elem.split('').reverse().join('');
});

console.log(result3);



console.log('4-----------------------------------');
let arr4 = ['123', '456', '789'];

let arr = arr4.map(function (elem) {
    return elem.split('');
});

console.log(arr);



console.log('5-----------------------------------');
let arr5 = [1, 2, 3, 4, 5];

let result5 = arr5.map(function (elem, index) {
    return elem * index;
});

console.log(result5);