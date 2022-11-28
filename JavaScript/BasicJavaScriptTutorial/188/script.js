"use strict";

function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test(1);