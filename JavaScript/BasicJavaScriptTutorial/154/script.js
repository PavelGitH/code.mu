"use strict";

console.log('1-----------------------------------');
let str1 = 'london';
let result1 = str1.slice(0, 5) + str1.slice(5).toUpperCase();
console.log(result1);

console.log('2-----------------------------------');
let str2 = 'london';
let result2 = str2.slice(0, 2).toUpperCase() + str2.slice(2);
console.log(result2);

console.log('3-----------------------------------');
let str8 = 'London';
str8 = str8.slice(0, 1).toLowerCase() + str8.slice(1);
console.log(str8);

console.log('4-----------------------------------');
let str3 = 'word1 word2 word3';
let words3 = str3.split(' ');
for (let i3 = 0; i3 < words3.length; i3++) {
    words3[i3] = words3[i3].slice(0, 1).toUpperCase() + words3[i3].slice(1)
}
let str33 = words3.join(' ');
console.log(str33);

console.log('5-----------------------------------');
let str4 = 'var_test_text';
let arr4 = str4.split('_');
for (let i4 = 0; i4 < arr4.length; i4++) {
    arr4[i4] = arr4[i4].slice(0, 1).toUpperCase() + arr4[i4].slice(1);
}
let str44 = arr4.join('');
console.log(str44);

console.log('6-----------------------------------');
let str5 = 'var_test_text';
let arr5 = str5.split('_');
for (let i5 = 1; i5 < arr5.length; i5++) {
    arr5[i5] = arr5[i5].slice(0, 1).toUpperCase() + arr5[i5].slice(1);
}
let str55 = arr5.join('');
console.log(str55);

console.log('7-----------------------------------');
let str7 = 'one two three four five six seven eight nine';
let str77 = str7.split(' ').reverse().join(' ');
console.log(str77);