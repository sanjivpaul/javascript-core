// Primitive: (call by value)
// 7 types: String, number, boolean, null, undefined, symbol, BigInt

// non-primitive: (reference type)
// Array, objects, Functions


// example of primitive:
let score = 5;
let scoreValue = 5.5;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId); // false => even we pass the same string that is symbol 😍

// example of non-primitive => reference type
const heros = ["ironman", "thor", "captain america"];

// object => key value pairs
const myObject = {
    name: "Sanjiv Paul",
    age: 18,
    city: "Jamshedpur"
}



const myFunc = function () {
    console.log("hello world");
}

// myFunc(); //hello world
// console.log(myObject);
// console.log(heros);

// console.log(typeof heros); // object
// console.log(typeof myObject); //object
// console.log(typeof myFunc); // function

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ****************** Stack & Heap memory in JS *****************************

// Memory in JS:
// 2 Types:
// Stack (use in primitive) 
// => returned copy of a original value or declared variable
// => if we change something then change in copy not affect the originala value

// Heap (use in non-primitive) => returned reference of the original value
// => returned reference of original value
// => if we change something then it will change in the original value

// Stack: => it will change the copy of original value.

let myInstaName = "@sanjivpaul7462";
let anotherName = myInstaName;
anotherName = "@sanjivpaul81"

console.log(myInstaName); // @sanjivpaul7462
console.log(anotherName); //@sanjivpaul81 => change in copy of the original value

// Heap: => it will change the original value.

let userOne = {
    email: "sanjivpaul81@gmail.com",
    upi: "8521542005@ybl"
}

let userTwo = userOne;

userTwo.email = "sanjiv@gmail.com";

console.log(userOne.email); //sanjiv@gmail.com => its change the original value
console.log(userTwo.email); //sanjiv@gmail.com
