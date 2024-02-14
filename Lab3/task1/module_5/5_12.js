// let user = {
//    name: "John",
//    age: 30,

//    toString() {
//       return `{name: "${this.name}", age: ${this.age}}`;
//    }
// };

alert(user); // {name: "John", age: 30}

let student = {
   name: 'John',
   age: 30,
   isAdmin: false,
   courses: ['html', 'css', 'js'],
   spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

let user = {
   sayHi() { // ignored
      alert("Hello");
   },
   [Symbol("id")]: 123, // ignored
   something: undefined // ignored
};

alert(JSON.stringify(user)); // {} (empty object)

let room = {
   number: 23
};

let meetup = {
   title: "Conference",
   participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON

let room = {
   number: 23
};

let meetup = {
   title: "Conference",
   participants: [{ name: "John" }, { name: "Alice" }],
   place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meetup, ['title', 'participants']));
// {"title":"Conference","participants":[{},{}]}

let room = {
   number: 23
};

let meetup = {
   title: "Conference",
   participants: [{ name: "John" }, { name: "Alice" }],
   place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

let room = {
   number: 23
};

let meetup = {
   title: "Conference",
   participants: [{ name: "John" }, { name: "Alice" }],
   place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meetup, function replacer(key, value) {
   alert(`${key}: ${value}`);
   return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

let room = {
   number: 23,
   toJSON() {
      return this.number;
   }
};

let meetup = {
   title: "Conference",
   room
};

alert(JSON.stringify(room)); // 23

alert(JSON.stringify(meetup));
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert(numbers[1]); // 1