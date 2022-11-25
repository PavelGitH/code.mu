"use strict";

console.log('1-----------------------------------');

let obj = {
    func1: function () { return 1; },
    func2: function () { return 2; },
    func3: function () { return 3; },
};

console.log(obj.func1(), obj.func2(), obj.func3());

console.log('2-----------------------------------');

for (let key in obj) {
    console.log(obj[key]());
}

console.log('3-----------------------------------');

let obj3 = {
    func1: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    },
    func2: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem ** 2;
        }
        return sum;
    },
    func3: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem ** 3;
        }
        return sum;
    },
};

console.log(obj3.func1([1, 2, 3]));
console.log(obj3.func2([1, 2, 3]));
console.log(obj3.func3([1, 2, 3]));