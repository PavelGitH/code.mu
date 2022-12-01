"use strict";

console.log('1-----------------------------------');
let date = new Date();
let day = date.getDay();
console.log(day);

if (day > 0 && day < 6) {
    console.log('working day');
} else {
    console.log('holiday');
}

function howDay(days) {
    if (days < 1) {
        return 5;
    } else {
        return (5 - days);
    }
}

console.log('left until the weekend' + ' ' + howDay(day) + ' ' + 'days');