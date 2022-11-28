"use strict";

console.log('1-----------------------------------');

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

test(
    function () { return 1; },
    function () { return 2; },
    function () { return 3; },
);

console.log('3-----------------------------------');

function func13() { return 1; }
function func23() { return 2; }
function func33() { return 3; }

function test3(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

test3(func13, func23, func33);

console.log('4-----------------------------------');

let func134 = function () { return 1; }
let func234 = function () { return 2; }
let func334 = function () { return 3; }

function test4(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

test4(func134, func234, func334);

console.log('5-----------------------------------');

function test5(func) {
    console.log(func(3));
}

test5(function (num) {
    return num ** 3;
});

console.log('6-----------------------------------');

function func66(num) {
    return num ** 3;
};

function test6(func66) {
    console.log(func66(4));
}

test6(func66);

console.log('7-----------------------------------');
let func77 = function (num) {
    return num ** 3;
};

function test7(func77) {
    console.log(func77(5));
}

test7(func77);

console.log('8-----------------------------------');

function test8(func1, func2) {
    console.log(func1() + func2());
}

test8(
    function () { return 2; },
    function () { return 3; },
);

console.log('9-----------------------------------');

function test9(num, func91, func92) {
    return func91(num) + func92(num);
}

function func91(num) {
    return num ** 2;
}

function func92(num) {
    return num ** 3;
}

console.log(test9(3, func91, func92));

console.log('10-----------------------------------');

function test10(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result = test10([1, 2, 3], function (num) {return num ** 2 })

console.log(result);

console.log('11-----------------------------------');

console.log(test10([1, 2, 3], function (num) {return num ** 3 }));