"use strict";

//1
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
}
console.log('2-----------------------------------------------------------------------------');

//2
for (let l = 10; l <= 1000; l++) {
    let str2 = String(l);
    console.log(Number(str2[0]) + Number(str2[1]));
}
console.log('3-----------------------------------------------------------------------------');

//3
for (let j = 10; j <= 1000; j++) {
    let str3 = String(j);
    if (str3[0] == 1) {
        console.log(str3[0]);
    }
}
console.log('4-----------------------------------------------------------------------------');

//4
for (let t = 10; t <= 1000; t++) {
    let str4 = String(t);
    if (Number(str4[0]) + Number(str4[1]) == 5) {
        console.log(t);
    }
}
