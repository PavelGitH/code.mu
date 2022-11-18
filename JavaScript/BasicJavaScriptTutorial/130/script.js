"use strict";

console.log('1-----------------------------------');
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
    }
}

if (flag = true) {
    console.log('+++');
} else {
    console.log('---');
}

console.log('2-----------------------------------');
let n = 17;
let flag2 = true;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        flag2 = false;
        break;
    }
}

if (flag2 == true) {
    console.log(n + ' - is a prime number.');
} else {
    console.log(n + ' - is not a prime number.');
}