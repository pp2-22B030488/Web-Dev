let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

function sum(a, b) {
   return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests, same as above

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

alert(`The backslash: \\`); // The backslash: \
alert('I\'m the Walrus!'); // I'm the Walrus!
alert("I'm the Walrus!"); // I'm the Walrus!
alert(`My\n`.length); // 3

let str = `Hello`;

// the first character
alert(str[0]); // H
alert(str.at(0)); // H

// the last character
alert(str[str.length - 1]); // o
alert(str.at(-1));

// let str = `Hello`;

alert(str[-2]); // undefined
alert(str.at(-2)); // l

for (let char of "Hello") {
   alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

// let str = 'Hi';

str[0] = 'h'; // error
alert(str[0]); // doesn't work

alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface

alert('Interface'[0].toLowerCase()); // 'i'

let str = 'Widget with id';

alert(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
alert(str.indexOf('widget')); // -1, not found, the search is case-sensitive

alert(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
   let foundPos = str.indexOf(target, pos);
   if (foundPos == -1) break;

   alert(`Found at ${foundPos}`);
   pos = foundPos + 1; // continue the search from the next position
}

let str = "Widget with id";

if (str.indexOf("Widget")) {
   alert("We found it"); // doesn't work!
}

alert('Österreich' > 'Zealand'); // true

let str = '';

for (let i = 65; i <= 220; i++) {
   str += String.fromCodePoint(i);
}
alert(str);
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

function ucFirst(str) {
   if (!str) return str;

   return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("john")); // John

function checkSpam(str) {
   let lowerStr = str.toLowerCase();

   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
   return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
   return +str.slice(1);
}