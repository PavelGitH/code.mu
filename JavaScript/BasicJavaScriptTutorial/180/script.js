"use strict";

console.log('1-----------------------------------');

function func1() {
    return 'string';
}

console.log(func1());

console.log('3-----------------------------------');

console.log(func1);

console.log('4-----------------------------------');

function func4() {
    console.log('1');
}

func4 = 123;

console.log(func4);

console.log('5-----------------------------------');

function func5() {
    return 3;
}

console.log('6-----------------------------------');

let func6 = func5;

console.log('7-----------------------------------');

console.log(func5());
console.log(func6());

console.log('8-----------------------------------');

let func8 = function () {
    return 1;
}

console.log('9-----------------------------------');

let func9 = function () {
    return 2;
}

console.log('10-----------------------------------');
console.log(func9() + func8());