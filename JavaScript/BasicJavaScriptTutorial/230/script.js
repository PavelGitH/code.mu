"use strict";

console.log('1-----------------------------------');
let date1 = new Date(2000, 0, 1);
let date2 = new Date(2010, 1, 15);


console.log(date2 - date1);
console.log(Math.floor((date2 - date1) / 1000 / 60 / 60 / 24)); //days
console.log(Math.floor((date2 - date1) / 1000 / 60 / 60 / 24 / 30)); //months
console.log(Math.floor((date2 - date1) / 1000 / 60 / 60 / 24 / 30 / 12)); //years