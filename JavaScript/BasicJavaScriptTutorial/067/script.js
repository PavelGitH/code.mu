"use strict";

let test = { x: 1, y: 2, z: 3 };
console.log(typeof test);
// object

let test2 = { x: 1, y: 2, z: 3 };
console.log(typeof test2.x);
// number

let test3 = [1, 2, 3];
console.log(typeof test3);
// object

let test4 = [1, 2, 3];
console.log(typeof test4[1]);
// number

let test15 = [1, 2, 3];
let test25 = 1;
console.log(typeof test15);
// object

let test16 = [1, 2, 3];
let test26 = 1;
console.log(typeof test16[test26]);
// number

/*В JavaScript семь примитивных типов данных: string, 
number, boolean, null, undefined, symbol, bigint.
*/