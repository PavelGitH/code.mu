"use strict";

//1
let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum);

//2
let arr2 = [2, 5, 9, 3, 1, 4];
let sum2 = 0;
for (let elem2 of arr2) {
    if (elem2 % 2 === 0) {
        sum2 += elem2;
    }
}
console.log(sum2);

//3
let arr3 = [2, 5, 9, 3, 1, 4];
let sum3 = 0;
for (let elem3 of arr3) {
    sum3 += (elem3 ** 2);
}
console.log(sum3);

//4
let arr4 = [2, 5, 9, 3, 1, 4];
let num4 = 1;
for (let elem4 of arr4) {
    num4 *= elem4;
}
console.log(num4);
