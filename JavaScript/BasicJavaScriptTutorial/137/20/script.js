"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7];
let day = 5;

for (let i = 0; i < arr.length; i++) {
    if (i == day - 1) {
        document.write('<b>' + arr[i] + '</b>');
    } else {
        document.write(arr[i]);
    }
}