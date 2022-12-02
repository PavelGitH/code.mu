"use strict";

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

console.log(Math.floor((now - date) / 1000));