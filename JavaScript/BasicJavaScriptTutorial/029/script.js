"use strict";

let str = '12345';
console.log(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));

let num = 23456;
console.log(
    Number(String(num)[0]) +
    Number(String(num)[1]) +
    Number(String(num)[2]) +
    Number(String(num)[3]) +
    Number(String(num)[4])
);

console.log(
    Number(String(num)[0]) *
    Number(String(num)[1]) *
    Number(String(num)[2]) *
    Number(String(num)[3]) *
    Number(String(num)[4])
);

console.log(String(num)[4] + String(num)[3] + String(num)[2] + String(num)[1] + String(num)[0]);