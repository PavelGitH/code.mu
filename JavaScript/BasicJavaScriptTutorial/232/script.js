"use strict";

console.log('1-----------------------------------');
function func(month, year) {
    let date = new Date(year, month, 0);
    return date.getDate();
}

console.log(func(2, 1987));



console.log('2-----------------------------------');

let date2 = new Date(2025, 5, 0);
let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
console.log(days[date2.getDay()]);