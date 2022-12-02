"use strict";

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() + 1, 0);
let day = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday '];

console.log(day[date.getDay()]);