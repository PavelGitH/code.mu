"use strict";

console.log('1-----------------------------------');
let arr = [1, 56, 3, 0, 5, -25, 12];

for (let elem of arr) {
    if (elem == 0) {
        break;
    }
    console.log(elem);
}

console.log('2-----------------------------------');
// 'arr' from the first exercises;
let sum = 0;

for (let elem2 of arr) {
    if (elem2 < 0) {
        break;
    }
    sum += elem2;
}
console.log(sum);

console.log('3-----------------------------------');
// 'arr' from the first exercises;
let poz = 0;

for (let elem3 of arr) {
    if (elem3 != 3) {
        poz++;
    } else {
        break;
    }
}
console.log(poz);

console.log('4-----------------------------------');
let sum4 = 0;

for (let i = 1; i < 100; i++) {
    if (sum4 <= 100) {
        sum4 += i;
    } else {
        console.log(--i);
        break;
    }
}
