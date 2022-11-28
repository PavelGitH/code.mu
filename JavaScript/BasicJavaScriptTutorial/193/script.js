"use strict";

console.log('1-----------------------------------');

let func = (function () {
    let num = 1;
    return function () {
        console.log(num);
        num++;
    }
})();

func();
func();


console.log('2-----------------------------------');
let func2 = (function () {
    let num = 1;
    return function () {
        console.log(num);
        if (num < 5) {
            num++;
        } else {
            num = 1;
        }
    }
})();

func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2()
