"use strict";

console.log('1-----------------------------------');
function func(num = 5) {
	console.log(num * num);
}
func(2);//4
func(3);//9
func();//25

console.log('2-----------------------------------');
function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func(2, 3);//5
func(3);//3
func();//0