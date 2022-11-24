"use strict";

let arr = [];
function sum(num) {
    let sumN = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sumN += i;
        }
    }
    return sumN;
}

function func(num1, num2) {
    return sum(num1) == num2 && sum(num2) == num1;
}

function funcN(num11, num22) {
    for (let i = num11; i <= num22; i++) {
        for (let j = num11; j <= num22; j++) {
            if (func(i, j) == true) {
                arr.push([i, j]);
            }
        }
    }
    return arr;
}

console.log(funcN(1, 1000));