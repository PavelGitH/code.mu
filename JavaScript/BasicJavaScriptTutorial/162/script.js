"use strict";

console.log('1-----------------------------------');
function sqrt1(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

console.log(round(sqrt1(2)));

console.log('2-----------------------------------');
function sqrt2(num) {
    return Math.sqrt(num);
}

function sum2(num1, num2, num3) {
    return num1 + num2 + num3;
}

let res = sum2(sqrt2(2), sqrt2(3), sqrt2(4));

console.log(res);

console.log('3-----------------------------------');
function round3(num) {
	return num.toFixed(3);
}

console.log(res = round3(res));