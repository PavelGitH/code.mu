"use strict";

console.log('1-----------------------------------');

let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };

function func(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            func(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

func(obj);



console.log('2-----------------------------------');
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let newArr = [];

function func2(arr) {
    for (let elem of arr) {
        if (typeof elem == 'object') {
            func2(elem);
        } else {
            newArr.push(elem);
            //console.log(newArr);
        }
    }
    return newArr;
}

console.log(func2(arr));



console.log('3-----------------------------------');
let obj3 = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } }
function func3(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            sum += func3(obj[key]);
        } else {
            sum += obj[key];
        }
    }
    return sum;
}

console.log(func3(obj3));



console.log('4-----------------------------------');

let arr4 = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function func4(arr) {
    let str = '';

    for (let elem of arr) {
        if (typeof elem == 'object') {
            str += func4(elem);
        } else {
            str += elem;
        }
    }

    return str;
}

console.log(func4(arr4));



console.log('5-----------------------------------');
let arr5 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
let arr55 = [];

function func5(arr) {

    for (let elem of arr) {
        if (typeof elem == 'object') {
            func5(elem);
        } else {
            arr55.push(elem ** 2);
        }
    }

    return arr55;
}

console.log(func5(arr5));