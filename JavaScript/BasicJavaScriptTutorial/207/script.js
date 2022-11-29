"use strict";

function func(...num) {
    let sum =0;
    num.map(elem => sum += elem);
    return sum / num.length;
}

console.log(func(1, 2, 3, 4, 5));