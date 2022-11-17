"use strict";

//1
let str = '';

for (let i = 1; i <= 5; i++) {
    str += '-';
}
console.log(str);

//2
let str2 = '';
for (let j = 1; j <= 9; j++) {
    str2 += j;
}
console.log(str2);

//3
let str3 = '';
for (let l = 9; l >= 1; l--) {
    str3 += l;
}
console.log(str3);

//4
let str4 = '-';
for (let t = 1; t <= 9; t++) {
    str4 += t + `-`;
}
console.log(str4);
