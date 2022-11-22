"use strict";

console.log('1-----------------------------------');
let str1 = 'js';
console.log(str1.toUpperCase());

console.log('2-----------------------------------');
let str2 = 'JS';
console.log(str2.toLowerCase());

console.log('3-----------------------------------');
let str3 = 'i am learning javascript!'
console.log(str3.substr(0, 5) + str3.substr(-11, 11));
console.log(str3.substring(0, 4) + str3.substring(13, 25));
console.log(str3.slice(0, 4) + str3.slice(13));

console.log('4-----------------------------------');
let str4 = 'abcde';
console.log(str4.indexOf('c'));

console.log('5-----------------------------------');
let str5 = 'abcde';
console.log(str5.indexOf('a'));

console.log('6-----------------------------------');
let str6 = 'abcde';
console.log(str6[0] === 'a');

console.log('7-----------------------------------');
let str7 = 'abcde';
console.log(str7[str7.length - 1] === 'a');

console.log('8-----------------------------------');
let str8 = 'http://code.mu';
let str8p = 'http://';
console.log(str8.slice(0, 7) === str8p);

console.log('9-----------------------------------');
let str9 = 'http://code.mu';
let str9p = '.html';
console.log(str9.slice(-5) === str9p);

console.log('10-----------------------------------');
let str10 = 'http://code.mu';
let str10p = 'http://';
console.log(str10.startsWith(str10p));

console.log('11-----------------------------------');
let str11 = 'http://code.mu';
let str11p = '.html';
console.log(str11.endsWith(str11p));

console.log('12-----------------------------------');
let str12 = '1-2-3-4-5';
let arr12 = str12.split('-');
console.log(arr12);

console.log('13-----------------------------------');
let str13 = '12345';
let arr13 = str13.split('');
console.log(arr13);

console.log('14-----------------------------------');
let arr14 = [1, 2, 3, 4, 5];
let str14 = arr14.join('-');
console.log(str14);
