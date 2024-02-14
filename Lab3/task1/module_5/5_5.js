let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert(arr[1]); // undefined

// now arr = ["I",  , "home"];
alert(arr.length); // 3

// let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert(arr); // ["I", "JavaScript"]

// let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert(arr) // now ["Let's", "dance", "right", "now"]

// let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert(removed); // "I", "study" <-- array of removed elements

// let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert(arr); // "I", "study", "complex", "language", "JavaScript"

// let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert(arr); // 1,2,3,4,5

// let arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)

alert(arr.slice(-2)); // s,t (copy from -2 till the end)

// let arr = [1, 2];

// create an array from: arr and [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// let arr = [1, 2];

let arrayLike = {
   0: "something",
   length: 1
};

alert(arr.concat(arrayLike)); // 1,2,[object Object]

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
   alert(`${item} is at index ${index} in ${array}`);
});

// let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1

alert(arr.includes(1)); // true

// const arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (wrong, should be 0)
alert(arr.includes(NaN));// true (correct)

let result = arr.find(function (item, index, array) {
   // if true is returned, item is returned and iteration is stopped
   // for falsy scenario returns undefined
});

let users = [
   { id: 1, name: "John" },
   { id: 2, name: "Pete" },
   { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// let users = [
//    { id: 1, name: "John" },
//    { id: 2, name: "Pete" },
//    { id: 3, name: "Mary" },
//    { id: 4, name: "John" }
// ];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

// let users = [
//    { id: 1, name: "John" },
//    { id: 2, name: "Pete" },
//    { id: 3, name: "Mary" }
// ];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

// let arr = [1, 2, 15];

// the method reorders the content of arr
arr.sort();

alert(arr);  // 1, 15, 2

function compareNumeric(a, b) {
   if (a > b) return 1;
   if (a == b) return 0;
   if (a < b) return -1;
}

// let arr = [1, 2, 15];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15