"use strict";

console.log('1-----------------------------------');
let obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
    obj[key] = obj[key] ** 2;
}

console.log(obj);

console.log('2-----------------------------------');
let obj2 = { x: 1, y: 2, z: 3 };

for (let yek in obj2) {
    obj2[yek]++;
}

console.log(obj2);