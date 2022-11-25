"use strict";

console.log('1-----------------------------------');

let arr = [
    function () { return 1; },
    function () { return 2; },
    function () { return 3; },
];

console.log('2-----------------------------------');

console.log(arr[2]());

console.log('3-----------------------------------');

console.log(arr[0]() + arr[1]() + arr[2]());

console.log('4-----------------------------------');

for (let func of arr) {
    console.log(func());
}
