"use strict";

console.log('1-----------------------------------');
function func([name, surname, department, position, salary]) {
    console.log(name);
}

func(['John', 'Smit', 'development', 'programmer', 2000]);



console.log('2-----------------------------------');
function func2([name, surname, info]) {
    console.log(surname);
}

func2(['John', 'Smit', 'development', 'programmer', 2000]);



console.log('3-----------------------------------');
function func3([name, surname, department, position = 'junior']) {
    console.log(position);
}

func3(['John', 'Smit', 'development']);



console.log('4-----------------------------------');
function func4(department, [name, surname], [year, month, day]) {
    console.log(department);
}

func4('development', ['John', 'Smit'], [2018, 12, 31]);



console.log('5-----------------------------------');
function func5({ color, width, height }) {
    console.log(width);
}

func5({ color: 'red', width: 400, height: 500 });



console.log('6-----------------------------------');
function func6({ color = 'black', width, height }) {
    console.log(color);
}

func6({ color: 'red', width: 400, height: 500 });