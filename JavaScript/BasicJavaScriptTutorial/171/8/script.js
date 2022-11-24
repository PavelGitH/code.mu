"use strict";

function func(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

console.log(func([1, 2, 3, 4, 5]));