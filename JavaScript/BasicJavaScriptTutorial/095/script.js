"use strict";

let num = 15;
let sum;

if (num >= 10 && num < 99) {
    sum = Number(String(num)[0]) + Number(String(num)[1]);
    //console.log(sum);
    if (sum <= 9) {
        console.log('the sum of the digits is unambiguous');
    } else {
        console.log('the sum of the digits is two digits');
    }
} else {
    console.log('error!');
}