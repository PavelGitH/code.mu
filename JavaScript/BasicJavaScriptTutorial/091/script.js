"use strict";

let test1 = true;
let test2 = true;
if (test1 && test2) {
    console.log('+++');
} else {
    console.log('---');
}

let test12 = true;
let test22 = true;
if (test12 && !test22) {
    console.log('+++');
} else {
    console.log('---');
}

let test13 = true;
let test23 = true;
if (!test13 && !test23) {
	console.log('+++');
} else {
	console.log('---');
}

let test14 = true;
let test24 = true;
if (test14 && test24) {
	console.log('+++');
} else {
	console.log('---');
}

let test15 = true;
let test25 = true;
let test35 = true;
if (test15 && test25 && test35) {
	console.log('+++');
} else {
	console.log('---');
}

let test16 = true;
let test26 = true;
let test36 = true;
if (test16 || test26 && test36) {
	console.log('+++');
} else {
	console.log('---');
}

let test17 = true;
let test27 = true;
let test37 = true;
if (test17 || !test27 && !test37) {
	console.log('+++');
} else {
	console.log('---');
}