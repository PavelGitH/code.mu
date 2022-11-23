"use strict";

console.log('1-----------------------------------');
function func1(num) {
    return num;
}

console.log(func1(3) + func1(5));

console.log('2-----------------------------------');
function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;

    }
    return res;
}

console.log(sum([1, 2, 3, 4, 5]));

console.log('3-----------------------------------');
let arr = [1, 2, 3, 4, 5];

function func2(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return (res);
}

console.log(func2(arr));

console.log('4-----------------------------------');
function func1() {
    return 3;
}
function func2() {
    return 5;
}

console.log(func1() + func2());

console.log('5-----------------------------------');

console.log(sum5([1, 2, 3, 4, 5]));

function sum5(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

console.log('6-----------------------------------');
let res6 = sum6([1, 2, 3, 4, 5]);
console.log(res6);

function sum6(arr) {
    let sum6 = 0;

    for (let elem of arr) {
        sum6 += elem;
    }
    return sum6;
}

console.log('7-----------------------------------');
function add(num) {
    if (num <= 9) {
        return '0' + num;
    }
    return num;
}

console.log('8-----------------------------------');
let arr8 = [1, 2, 3, 4, 5];
let sum88 = sum8(arr);
console.log(sum88);

function sum8(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

console.log('9-----------------------------------');
let num9 = 12345;
let res9 = getDigitsSum(num9);
console.log(res9);

function getDigitsSum(num) {
    let arr = String(num).split('');
    let sum = 0;

    for (let elem of arr) {
        sum += Number(elem);
    }

    return sum;
}

console.log('10-----------------------------------');
console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        return (num % i !== 0);
    }
}
