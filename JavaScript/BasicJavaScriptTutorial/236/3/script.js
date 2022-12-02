"use strict";

let now = new Date();
let date = new Date(now.getFullYear() + 1, 0, 1);

console.log(Math.floor((date - now) / 1000 / 60 / 60 / 24));