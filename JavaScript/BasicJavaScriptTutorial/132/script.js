"use strict";

console.log('1-----------------------------------');
let str = 'count how many times each of its characters occurs in it';
let count = {};

for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === undefined) {
        count[str[i]] = 1;
    } else {
        count[str[i]]++;
    }
}

console.log(count);