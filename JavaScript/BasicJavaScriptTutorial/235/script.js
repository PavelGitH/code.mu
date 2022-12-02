"use strict";

console.log('1-----------------------------------');
let now1 = new Date();
let date1 = new Date(now1.getFullYear(), 11, 31);
let day1 = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday '];

console.log(day1[date1.getDay()]);



console.log('2-----------------------------------');
let now2 = new Date();
let date2 = new Date(now2.getFullYear(), now2.getMonth(), 1);
let day2 = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday '];

console.log(day2[date2.getDay()]);



console.log('3-----------------------------------');
let now3 = new Date();
let date3 = new Date(now3.getFullYear() + 1, 11, 31);
let day3 = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday '];

console.log(day3[date3.getDay()]);



console.log('4-----------------------------------');
let now4 = new Date();
let date4 = new Date(now4.getFullYear() + 1, now4.getMonth(), now4.getDate());
let day4 = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday '];

console.log(day4[date4.getDay()]);



console.log('5-----------------------------------');
let now5 = new Date();
let date5 = new Date(now5.getFullYear() - 1, now5.getMonth(), now5.getDate());
let day5 = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday '];

console.log(day5[date5.getDay()]);



console.log('7-----------------------------------');
let now7 = new Date();
let date7 = new Date(now7.getFullYear(), now7.getMonth() - 1, now7.getDate());
let day7 = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday '];

console.log(day7[date7.getDay()]);



console.log('8-----------------------------------');
let date81 = new Date(2022, 0, 1);
let date82 = new Date(2022, 8, 10);

console.log((date82 - date81) / 1000 / 60 / 60 / 24);



console.log('9-----------------------------------');
let now9 = new Date();
let date91 = new Date(now9.getFullYear(), now9.getMonth(), 20);
let date92 = new Date(now9.getFullYear(), now9.getMonth() + 1, 10);

console.log((date92 - date91) / 1000 / 60 / 60 / 24);



console.log('10-----------------------------------');
let now10 = new Date();
let date10 = new Date(now10.getFullYear(), now10.getMonth(), now10.getDate() - 1, 12);

console.log(Math.floor((now10 - date10) / 1000 / 60 / 60));



console.log('11-----------------------------------');
let now11 = new Date();
let date11 = new Date(now11.getFullYear(), now11.getMonth(), now11.getDate());

console.log(Math.floor((now11 - date11) / 1000 / 60 / 60));



console.log('12-----------------------------------');
let now12 = new Date();
let date12 = new Date(now11.getFullYear(), now11.getMonth(), now11.getDate(), 24);

console.log(Math.floor((date12 - now12) / 1000 / 60 / 60));



console.log('13-----------------------------------');
let now = new Date();
let sum = 0;

for (let year = 2000; year < now.getFullYear(); year++) {

    let date = new Date(year, 0, 1);

    if (date.getDay() == 6 || date.getDay() == 0) {
        sum++
    }
};

console.log(sum);

