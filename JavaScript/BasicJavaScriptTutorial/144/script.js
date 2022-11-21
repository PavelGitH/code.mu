"use strict";

console.log('1-----------------------------------');
let sum1 = 0;
let obj1 = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

for (let key1 in obj1) {
    let obj11 = obj1[key1];

    for (let key11 in obj11) {
        sum1 += obj11[key11];
    }
}

console.log(sum1);

console.log('2-----------------------------------');
let sum2 = 0;
let obj2 = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}

for (let key2 in obj2) {
    let obj22 = obj2[key2];

    for (let key22 in obj22) {
        let obj222 = obj22[key22]

        for (let key222 in obj222) {
            sum2 += obj222[key222];
        }
    }
}

console.log(sum2);