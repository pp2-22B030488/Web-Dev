// let billion = 1000000000;
// let billion = 1_000_000_000;
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert(7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mсs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

alert(0xff); // 255
alert(0xFF); // 255 (the same, case doesn't matter)

// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255

alert(a == b); // true, the same number 255 at both sides

let num = 255;

alert(num.toString(16));  // ff
alert(num.toString(2));   // 11111111

alert(123456..toString(36)); // 2n9c

// let num = 1.23456;

alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// let num = 12.34;
alert(num.toFixed(1)); // "12.3"

// let num = 12.34;
alert(num.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digit

alert(0.1 + 0.2 == 0.3); // false

alert(0.1 + 0.2); // 0.30000000000000004

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // "0.30"

alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.42000000000

alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity

alert(Number.isNaN(NaN)); // true
alert(Number.isNaN("str" / 2)); // true

// Note the difference:
alert(Number.isNaN("str")); // false, because "str" belongs to the string type, not the number type
alert(isNaN("str")); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert(a + b);