let message = "Hello!";
let phrase = message;

// let user = {
//    name: "John"
// };

// let user = { name: "John" }; 

let admin = user; // copy the reference

// let user = { name: 'John' };

// let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true

// let a = {};
// let b = {}; // two independent objects

alert(a == b); // false

const user = {
   name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete

let user = {
   name: "John",
   age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
   clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

let user = { name: "John" };
Object.assign(user, { name: "Pete" });
alert(user.name); // now user = { name: "Pete" }

let user = {
   name: "John",
   age: 30
};
let clone = Object.assign({}, user);
alert(clone.name); // John
alert(clone.age); // 30

let user = {
   name: "John",
   sizes: {
      height: 182,
      width: 50
   }
};
alert(user.sizes.height); // 182