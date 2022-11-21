"use strict";

console.log('1-----------------------------------');
let sum = 0;
let arr = [[1, 2, 3], [4, 5], [6]];

for (let subArr of arr) {
    for (let elem of subArr) {
        sum += elem;
    }
}

console.log(sum);

console.log('2-----------------------------------');
let sum2 = 0;
let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let s1arr2 of arr2) {
    for (let s2arr2 of s1arr2) {
        for (let s3arr2 of s2arr2) {
            sum2 += s3arr2;
        }
    }
}

console.log(sum2);

console.log('3-----------------------------------');
let sum3 = 0;
let arr3 = [
    [1, 2, 3],
    [4, 5],
    [6],
];

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
        sum3 += arr3[i][j];
    }
}

console.log(sum3);

console.log('4-----------------------------------');
let sum4 = 0;
let arr4 = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8]
    ],
];

for (let i4 = 0; i4 < arr4.length; i4++) {
    for (let j4 = 0; j4 < arr4[i4].length; j4++) {
        for (let k4 = 0; k4 < arr4[j4].length; k4++) {
            sum4 += arr4[i4][j4][k4];
        }
    }
}

console.log(sum4);