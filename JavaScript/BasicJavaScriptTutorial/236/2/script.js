"use strict";

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);

console.log(Math.floor((date - now) / 1000));