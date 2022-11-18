"use strict";

console.log('1-----------------------------------');
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}

console.log(obj);

console.log('2-----------------------------------');
let obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj2new = {};

for (let key in obj2) {
    if (obj2[key] % 2 === 0) {
        obj2new[key] = obj2[key];
    }
}

console.log(obj2new);

console.log('3-----------------------------------');
let obj3 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj3new = {};

for (let key3 in obj3) {
    obj3new[obj3[key3]] = key3
}

console.log(obj3new);