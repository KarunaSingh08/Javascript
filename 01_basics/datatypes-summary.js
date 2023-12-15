// How data is kept/stored in the memory and how you can access your data, two categorizations have been made officially on the basis of this:-

// Primitive: They are called by value, which means whenever you call them. If you copy it from somewhere, then the reference of its original data is not given to you in the memory, after copying it is given to you separately and whatever change you make in it gets changed in the copy.

// 7 types : String, Number, Boolean, null(null means completely empty), undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "karuna",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// 1) Primitive Datatypes:
// Number => Number
// String => String
// Boolean => Boolean
// null => Object
// undefined => undefined
// symbol => symbol
// BigInt => BigInt

// 2) Non-primitive Datatypes:
// Arrays => object
// Function => function(object function)
// Object => object

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughtout the program as we assign different values to them.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "karunasinghdotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "karuna@google.com";

console.log(userOne.email);
console.log(userTwo.email);
