function showMessage() {
   alert('Hello everyone!');
}

function showMessage() {
   alert('Hello everyone!');
}

showMessage();
showMessage();

function showMessage() {
   let message = "Hello, I'm JavaScript!"; // local variable

   alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function

// let userName = 'John';

function showMessage() {
   let message = 'Hello, ' + userName;
   alert(message);
}

showMessage(); // Hello, John

// let userName = 'John';

function showMessage() {
   userName = "Bob"; // (1) changed the outer variable

   let message = 'Hello, ' + userName;
   alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function

let userName = 'John';

function showMessage() {
   let userName = "Bob"; // declare a local variable

   let message = 'Hello, ' + userName; // Bob
   alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName); // John, unchanged, the function did not access the outer var

function showMessage(from, text) { // parameters: from, text
   alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage(from, text) {

   from = '*' + from + '*'; // make "from" look nicer

   alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann

function showMessage(from, text = "no text given") {
   alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

function showMessage(from, text) {
   if (text === undefined) {
      text = 'no text given';
   }

   alert(from + ": " + text);
}

function showCount(count) {
   // if count is undefined or null, show "unknown"
   alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

function sum(a, b) {
   return a + b;
}

let result = sum(1, 2);
alert(result); // 3

function checkAge(age) {
   if (age >= 18) {
      return true;
   } else {
      return confirm('Do you have permission from your parents?');
   }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
   alert('Access granted');
} else {
   alert('Access denied');
}