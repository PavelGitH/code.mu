"use strict";

console.log('1-----------------------------------');
let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];

for (let employe of employees) {
    console.log(employe.name + '-' + employe.salary);
}

console.log('2-----------------------------------');
let sum2 = 0;
let employees2 = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];

for (let employe2 of employees2) {
    sum2 += employe2.salary;
}

console.log(sum2);

console.log('3-----------------------------------');
let sum3 = 0;
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

for ( let employe3 of employees3) {
    if (employe3.age >= 30) {
       sum3 +=  employe3.salary;
    }
}

console.log(sum3);