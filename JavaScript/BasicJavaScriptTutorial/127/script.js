"use strict";

console.log('1-----------------------------------');
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}

console.log(arr);

console.log('2-----------------------------------');
let arr2 = [1, 2, 3, 4, 5];

for (let i2 = 0; i2 < arr2.length; i2++) {
    arr2[i2]--;
}

console.log(arr2);

console.log('3-----------------------------------');
let arr3 = [1, 2, 3, 4, 5];

for (let i3 = 0; i3 < arr3.length; i3++) {
    arr3[i3] = arr3[i3] + 10;
}

console.log(arr3);