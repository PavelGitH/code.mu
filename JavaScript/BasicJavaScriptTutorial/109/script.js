"use strict";
//1
let month = 11;

if (month == 1 || month == 2 || month == 12) {
    console.log('winter');
}
if (month >= 3 && month <= 5) {
    console.log('spring');
}
if (month >= 6 && month <= 8) {
    console.log('sumer');
}
if (month >= 9 && month <= 11) {
    console.log('autumn');
}

//2
let str = 'abcde';

if (str[0] == 'a') {
    console.log('yes');
} else {
    console.log('no');
}

//3
let num = 123;
let nstr = Number(String(num)[0]);

if (nstr == 1 || nstr == 2 || nstr == 3) {
    console.log('yes');
} else {
    console.log('no');
}

//4
let num4 = 123;

console.log(Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]));

//5
let num5 = 123456;
let strnum5 = String(num5);

let sum1 = Number(strnum5[0]) + Number(strnum5[1]) + Number(strnum5[2]);
let sum2 = Number(strnum5[3]) + Number(strnum5[4]) + Number(strnum5[5]);

if (sum1 == sum2) {
    console.log('yes');
} else {
    console.log('no');
}
