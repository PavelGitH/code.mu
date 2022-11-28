"use strict";

console.log('1-----------------------------------');
let arr = [1, 2, 3, 4, 5];
function reck(arr) {
    console.log(arr.shift());
    if (arr.length !== 0) {
        reck(arr);
    }
}

reck(arr);



console.log('2-----------------------------------');
let arr2 = [1, 2, 3, 4, 5];

function squareSum(arr) {
    let sum = arr.shift();
    if (arr.length !== 0) {
        sum += squareSum(arr);
    }
    return sum;
}

console.log(squareSum(arr2));