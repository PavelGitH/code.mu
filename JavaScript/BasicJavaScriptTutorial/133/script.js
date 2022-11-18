"use strict";

console.log('1-----------------------------------');
let arr1 = [1, 2, 3, 4, 5];

for (let i1 = 0; i1 < arr1.length - 1; i1++) {
    console.log(arr1[i1 + 1]);
}

console.log('2-----------------------------------');
let arr2 = [1, 2, 3, 4, 5];

for (let i2 = 0; i2 < arr2.length - 1; i2++) {
    console.log(arr2[i2] + arr1[i2 + 1]);
}

console.log('3-----------------------------------');
let arr3 = [1, 2, 3, 4, 5];

for (let i3 = 2; i3 < arr3.length; i3++) {
    console.log(arr3[i3 - 2], arr3[i3 - 1]);
}

console.log('4-----------------------------------');
let arr4 = [1, 2, 3, 4, 5];

for (let i4 = 2; i4 < arr4.length; i4++) {
    console.log(arr4[i4 - 2] + arr4[i4 - 1] + arr4[i4]);
}

console.log('5-----------------------------------');
let arr5 = [1, 2, 3, 4, 5];

for (let i5 = 1; i5 < arr5.length - 1; i5++) {
    console.log(arr5[i5 - 1] + arr5[i5] + arr5[i5 + 1]);
}