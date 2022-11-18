"use strict";

console.log('1-----------------------------------');
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
}

document.write('-----------------------------------');

console.log('2-----------------------------------');
for (let i2 = 10; i2 <= 33; i2 += 10) {
    for (let j2 = 1; j2 <= 3; j2++) {
        document.write(i2 + j2 + ' ');
    }
}