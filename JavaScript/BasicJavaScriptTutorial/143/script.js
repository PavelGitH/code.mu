"use strict";

console.log('1-----------------------------------');
let sum1 = 0;
let obj1 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

sum1 = obj1['key1']['key1'] +
    obj1['key1']['key2'] +
    obj1['key1']['key3'] +
    obj1['key2']['key1'] +
    obj1['key2']['key2'] +
    obj1['key2']['key3'] +
    obj1['key3']['key1'] +
    obj1['key3']['key2'] +
    obj1['key3']['key3'];

console.log(sum1);

console.log('2-----------------------------------');
let obj2 = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}

console.log(obj2[2][2]);
console.log(obj2[3][1]);

console.log('3-----------------------------------');
let sum3 = 0;
let obj = {
    key3: {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
        },
        f: 5,
    },
    key23: {
        g: 6,
        h: 7,
    },
}
sum3 = obj['key3']['a'] +
    obj['key3']['b'] +
    obj['key3']['c']['d'] +
    obj['key3']['c']['e'] +
    obj['key3']['f'] +
    obj['key23']['g'] +
    obj['key23']['h'];

console.log(sum3);