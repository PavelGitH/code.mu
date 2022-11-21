"use strict";

console.log('1-----------------------------------');
let arr1 = [];

for (let i = 0; i < 3; i++) {
    arr1[i] = [];
    for (let j = 0; j < 5; j++) {
        arr1[i].push(j + 1);
    }
}

console.log(arr1);

console.log('2-----------------------------------');
let arr2 = [];

for (let i2 = 0; i2 < 3; i2++) {
    arr2[i2] = [];
    for (let j2 = 0; j2 < 4; j2++) {
        arr2[i2].push('x');
    }
}

console.log(arr2);

console.log('3-----------------------------------');
let arr3 = [];

for (let i3 = 0; i3 < 3; i3++) {
    arr3[i3] = [];
    for (let j3 = 0; j3 < 2; j3++) {
        arr3[i3][j3] = [];
        for (let k3 = 0; k3 < 5; k3++) {
            arr3[i3][j3].push(k3 + 1);
        }
    }
}

console.log(arr3);