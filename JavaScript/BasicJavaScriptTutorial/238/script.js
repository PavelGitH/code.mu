"use strict";

console.log('1-----------------------------------');
let date1 = new Date();
let date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 12);

if (date1 < date2) {
    console.log('not been');
} else {
    console.log('been')
}