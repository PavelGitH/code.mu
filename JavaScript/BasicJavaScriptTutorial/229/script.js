"use strict";

console.log('1-----------------------------------');
let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);

console.log((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);