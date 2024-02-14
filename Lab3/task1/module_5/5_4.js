let arr = new Array();
// let arr = [];


// let fruits = ["Apple", "Orange", "Plum"];

// let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum

// let fruits = ["Apple", "Orange", "Plum"];

alert(fruits.length); // 3

// mix of values
// let arr = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];

// get the object at index 1 and then show its name
alert(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

// let fruits = [
//    "Apple",
//    "Orange",
//    "Plum",
// ];

// let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[fruits.length - 1]); // Plum

// let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.pop()); // remove "Pear" and alert it

alert(fruits); // Apple, Orange

// let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert(fruits); // Apple, Orange, Pear

// let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert(fruits); // Apple, Orange, Pear

// let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert(fruits);

// let fruits = ["Banana"]

// let arr = fruits; // copy by reference (two variables reference the same array)

alert(arr === fruits); // true

arr.push("Pear"); // modify the array by reference

alert(fruits); // Banana, Pear - 2 items now

// let fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name

// let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
   alert(arr[i]);
}

// let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
   alert(arr[key]); // Apple, Orange, Pear
}

let fruits = [];
fruits[123] = "Apple";

alert(fruits.length); // 124

// let arr = [1, 2, 3];

alert(arr); // 1,2,3
alert(String(arr) === '1,2,3'); // true