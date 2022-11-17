"use strict";
//1
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
    console.log('+++');
} else {
    console.log('---');
}

//2
let num12 = '1';
let num22 = '2';

if (Number(num12) + Number(num22) === 3) {
    console.log('+++');
} else {
    console.log('---');
}

//3
let num13 = '1';
let num23 = '2';

if (Number(num13) + Number(num23) === 3) {
    console.log('+++');
} else {
    console.log('---');
}

//4
let num = 123;

if (Number(String(num)[0]) === 1) {
    console.log('+++');
} else {
    console.log('---');
}

//5
let num5 = 123;

if (Number(String(num5)[0]) === 1) {
    console.log('+++');
} else {
    console.log('---');
}

//6
let num6 = 123;

if (Number(String(num6)[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

//7
let num7 = 123;
let first7 = String(num7)[0];

if (Number(first7) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

//8
let num8 = 12;

if (String(num8).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//9
let num9 = 12;
let str9 = String(num9);

if (str9.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//10
let num10 = 12;

if (String(num10).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//11
let num11 = 12;

if (String(num11).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//12
let num012 = 12;

if (String(num012).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//13
let num013 = '123033'; // берем в кавычки, чтобы обращаться к цифрам 

let sum1 = Number(num013[0]) + Number(num013[1]) + Number(num013[2]);
let sum2 = Number(num013[3]) + Number(num013[4]) + Number(num013[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}