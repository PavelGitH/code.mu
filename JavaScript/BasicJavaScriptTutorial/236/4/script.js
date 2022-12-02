"use strict";

let sum = 0;
let now = new Date();

for (let month = 0; month <= 11; month++) {
    let date = new Date(now.getFullYear(), month, 13);

    if (date.getDay() == 5) {
        sum++
    }
}
console.log(sum);