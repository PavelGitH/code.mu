"use strict";

console.log('1-----------------------------------');
function each(arr, callback) {
    let result = [];
    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}

console.log(each([1, 2, 3, 4, 5], function (num) { return num * 2; }));



console.log('2-----------------------------------');
let reverse = each(['ab', 'bc', 'cd', 'de', 'ef'], function (str) {
    return str.split('').reverse().join('');
});

console.log(reverse);



console.log('3-----------------------------------');
let upper = each(['ab', 'bc', 'cd', 'de', 'ef'], function (str) {
    let result3 = str.slice(0, 1).toUpperCase() + str.slice(1);
    return result3;
});

console.log(upper);



console.log('4-----------------------------------');
function cube(num) {
    return num ** 3;
}

console.log(each([1, 2, 3, 4, 5], cube));
