"use strict";

function func() {
    return (new Date).getDate();
}

let arr = [2022, 25];
let [year, month, day = func()] = arr;

console.log(day);