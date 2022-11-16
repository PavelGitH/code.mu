"use strict";

const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); //['a', '!', 'c']

const arr2 = ['a', 'b', 'c'];
arr2 = [1, 2, 3];
console.log(arr2); //TypeError

const arr3 = ['a', 'b', 'c'];
arr3 = ['a', 'b', 'c'];
console.log(arr3); //TypeError