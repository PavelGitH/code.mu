"use strict";

//1
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
    console.log(key);
}

//2
for (let key1 in obj) {
    console.log(obj[key1]);
}