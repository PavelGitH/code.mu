"use strict";

console.log('1-----------------------------------');
function cub(num) {
    console.log(num ** 3);
    console.log(Math.pow(num, 3));
}
cub(3);

console.log('2-----------------------------------');
function func(num) {
    if (num > 0) {
        console.log('+++');
    } else if (num < 0) {
        console.log('---');
    } else {
        console.log('0');
    }
}
func(0);