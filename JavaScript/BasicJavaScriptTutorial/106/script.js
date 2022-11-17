"use strict";

let num = 1324567890;
let str = String(num)
let nstr = str[str.length - 1];

if (nstr == 0) {
    console.log('+');
} else {
    console.log('-');
}


if (nstr == 0 || nstr == 2 || nstr == 3 || nstr == 4 || nstr == 8) {
    console.log('+');
} else {
    console.log('-');
}

if (num % 2 == 0) {
    console.log('+');
} else {
    console.log('-');
} 