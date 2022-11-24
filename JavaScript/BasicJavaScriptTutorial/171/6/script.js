"use strict";

function func(str) {
    let arr = str.split(' ');
    let newArr = [];
    for (let elem of arr) {
        elem = elem[0].toUpperCase() + elem.slice(1);
        newArr.push(elem);
    }
    return newArr.join(' ');;
}
console.log(func('one two tree four five'));