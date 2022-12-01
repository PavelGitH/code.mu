"use strict";

let date = new Date;

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

console.log(
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds() + ' ' +
    addZero(date.getDate()) + '.' +
    (addZero(date.getMonth()) + 1) + '.' +
    date.getFullYear() + '.'
);