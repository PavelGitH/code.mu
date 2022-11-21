"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
    if (i < 6) {
        document.write('<p>' + arr[i] + '</p>');
    } else {
        document.write('<p><b>' + arr[i] + '</b></p>');
    }
}