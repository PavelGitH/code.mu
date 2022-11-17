"use strict";

//1
let sum = 0;
for (let i = 2; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//2
let summ = 0;
for (let j = 1; j <= 99; j++) {
    if (j % 2 === 0) {
        summ += j;
    }
}
console.log(summ)

//3
let mul = 1;
for (let l = 1; l <= 20; l++) {
    mul *= l;
}
console.log(mul);