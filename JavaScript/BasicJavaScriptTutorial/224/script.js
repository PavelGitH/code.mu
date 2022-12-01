"use strict";

let str = 'год-месяц-день';
let res = str.split('-').reverse().join('.');

console.log(res); //день.месяц.год.