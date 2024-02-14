let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123

// let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
alert(visitsCountObj["[object Object]"]); // 123

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
   alert(`${key}: ${value}`); // cucumber: 500 etc
});

// array of [key, value] pairs
let map = new Map([
   ['1', 'str1'],
   [1, 'num1'],
   [true, 'bool1']
]);

alert(map.get('1')); // str1

let obj = {
   name: "John",
   age: 30
};

// let map = new Map(Object.entries(obj));

alert(map.get('name')); // John

let prices = Object.fromEntries([
   ['banana', 1],
   ['orange', 2],
   ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2

// let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

// let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2

let set = new Set();

// let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
   alert(user.name); // John (then Pete and Mary)
}

// let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
   alert(value);
});

function unique(arr) {
   /* your code */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O

function unique(arr) {
   return Array.from(new Set(arr));
}