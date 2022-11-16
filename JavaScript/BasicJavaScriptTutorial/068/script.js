"use strict";

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
console.log(arr2); //['a', 2, 3]

let arr12 = [1, 2, 3];
let arr22 = arr12;
arr12[0] = 'a';
arr22[1] = 'b';
console.log(arr12); //['a', 'b', 3]

let arr13 = [1, 2, 3];
let arr23 = arr13;
arr13[0] = 'a';
arr23[0] = 'b';
console.log(arr23); //['b', 2, 3]