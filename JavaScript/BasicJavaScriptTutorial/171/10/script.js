"use strict";

function sum(num) {
    let summ = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            summ += i;
        }
    }
    return summ;
}

function func(num1, num2) {
    return sum(num1) == num2 && sum(num2) == num1;
}
console.log(func(220, 284));