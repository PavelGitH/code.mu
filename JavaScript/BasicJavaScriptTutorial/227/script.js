"use strict";

let date = new Date(1987, 9, 22);
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[date.getDay()]);