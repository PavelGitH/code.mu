"use strict";

let now = new Date();

for (let year = now.getFullYear() - 1; year > now.getFullYear() - 5; year--) {
    let date = new Date(year, 2, 0);
    if (date.getDate() == 29) {
        console.log(year);
    }
}
