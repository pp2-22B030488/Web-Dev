// <!DOCTYPE html>
// <html>
// <body>
//   <script>
//     alert( "I'm JavaScript!" );
//   </script>
// </body>
// </html>
// <!DOCTYPE html>
// <html lang="en">
// <body>
//     <script src="alert.js">
//     </script>
// </body>
// </html>

alert("I'm JavaScript!");


let admin, name; // can declare two variables at once
name = "John";
admin = name;
alert( admin ); // "John"
let planet = "Earth";
let currentVisitor;
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?

let name1 = "Ilya";
// the expression is a number 1
alert( `hello ${1}` ); // hello 1
// the expression is a string "name"
alert( `hello ${"name1"}` ); // hello name
// the expression is a variable, embed it
alert( `hello ${name1}` ); // hello Ilya

let name2 = prompt("What is your name?", "");
alert(name2);

let a = 1, b = 1;
alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value
alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)

let a1 = "1"; // prompt("First number?", 1);
let b1 = "2"; // prompt("Second number?", 2);
alert(a1 + b1); // 12

5 > 4 //→ true
"apple" > "pineapple" //→ false
"2" > "12" //→ true
undefined == null //→ true
undefined === null// → false
null == "\n0\n" //→ false
null === +"\n0\n" //→ false

if ("0") {
  alert( 'Hello' );
} //true
let value = prompt('What is the "official" name of JavaScript?', '');
    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }

let value1 = int(prompt('number'));
if(value1 > 1) alert(1);
else if(value < -1) alert(-1);
else alert(0);

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1 then 2: 3 is ignored

alert(1 && null && 2); //null

alert( alert(1) && alert(2) ); // 1 then underfinrd

alert( null || 2 && 3 || 4 ); //3

if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );
// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

let i = 3;
while (i) {
  alert( i-- ); //3 2 1
}

for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i );

for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}

let e = 0;
while(e < 3){
    alert('number ${e} ');
    e++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  alert( i ); // a prime
}

if(browser == 'Edge'){
    alert('You have got the Edge');
}
else if(browser == 'Chrome' || browser=='Firefox' || browser == 'Safari' || browser == 'Opera'){
    alert("Okay we support");
}
else{
    alert('We hope that this page looks ok')
}

let a2 = +prompt('a2?', '');
switch (a2) {
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 1 );
    break;
  case 2:
  case 3:
    alert( '2,3' );
    break;
}

function checkAge(age){
    (age > 18) ? true: confirm('Did parents allow you?'); 
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function pow(x, n1) {
  let result = x;

  for (let i = 1; i < n1; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n1 = prompt("n?", '');
if (n1 < 1) {
  alert(`Power ${n1} is not supported, use a positive integer`);
} else {
  alert( pow(x, n1) );
}