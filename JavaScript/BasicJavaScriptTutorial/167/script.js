"use strict";

console.log('1-----------------------------------');

function func1(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }
    return true;
}

console.log(func1([2, 4, 6, 8]));

console.log('2-----------------------------------');

function func2(num) {
    for (let i = 0; i < String(num).length; i++) {
        if (String(num)[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

console.log(func2(22));

console.log('3-----------------------------------');

function func3(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(func3([2, 4, 6, 8]))