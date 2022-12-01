"use strict";

console.log('1-----------------------------------');
let date1 = new Date(2018, 1, 35);
console.log(date1); //Mar 07 2018



console.log('2-----------------------------------');
let date2 = new Date(2018, 15, 1);
console.log(date2); //Apr 01 2019



console.log('3-----------------------------------');
let date3 = new Date(2018, 3, 31);
console.log(date3); //new Date(2018, 3, 31);



console.log('4-----------------------------------');
let date4 = new Date(2018, 1, 31);
console.log(date4); //Mar 03 2018



console.log('5-----------------------------------');
let date5 = new Date(2018, 12, 33);
console.log(date5); //Feb 02 2019



console.log('6-----------------------------------');
let date6 = new Date(2018, 33, 33);
console.log(date6); //Nov 02 2020



console.log('7-----------------------------------');
let date7 = new Date(2018, 5, 0);
console.log(date7); //May 31 2018



console.log('8-----------------------------------');
let date8 = new Date(2018, 0, 0);
console.log(date8); //Dec 31 2017



console.log('9-----------------------------------');
let date9 = new Date(2018, -12, -33);
console.log(date9); //Nov 28 2016



console.log('10-----------------------------------');
let date10 = new Date(2018, 0, 1, 23, 0, 60);
console.log(date10); //Jan 01 2018




console.log('11-----------------------------------');
let date11 = new Date(2018, 0, 1, 23, 60, 0);
console.log(date11); //Jan 02 2018



console.log('12-----------------------------------');
let date12 = new Date(2018, 0, 1, 100, 100, 100);
console.log(date12); //Jan 05 2018