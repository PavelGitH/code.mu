"use strict";

let age = 17;
let adult;
if (age >= 18) {
    adult = true;
} else {
    adult = false;
}
console.log(adult);


let age2 = 17;
let adult2;
if (age2 >= 18) {
    adult2 = true;
} else {
    adult2 = false;
}
console.log(adult2);


let age3 = 17;
let res3;
if (age3 >= 18) {
    if (age3 <= 23) {
        res3 = 'от 18 до 23';
    } else {
        res3 = 'больше 23';
    }
} else {
    res3 = 'меньше 18';
}
console.log(res3);


let age5 = 19;
let res5;
if (age5 >= 18) {
    if (age5 <= 23) {
        res5 = 'от 18 до 23';
    } else {
        res5 = 'больше 23';
    }
} else {
    res5 = 'меньше 18';
}
console.log(res5);