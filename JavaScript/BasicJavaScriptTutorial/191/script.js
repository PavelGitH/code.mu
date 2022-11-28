"use strict";

function test() {
    let num = 10;

    return function () {
        console.log(num);
        num--;
        if (num < 0) {
            console.log('countdown is over');
            num++;
        }
    }

}

let func = test();

func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();
func();