// js => objects, events

// 2 ways of declaring objects
    // 1. object literal
    // 2. object construnctor (singleton method)

// Object.create // => constructor method 

// object literal => key value pairs

const mySym = Symbol("key1")

const jsUser = {
    name:"Sanjiv",
    "full_name": "Sanjiv Paul",
    mySym: "mykey1",
    age:18,
    location: "Jamshedpur",
    email: "sanjiv@sanjiv.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}; 

// ways of accessing objects
// console.log(jsUser.email); // first way
// console.log(jsUser["email"]); // second way
// console.log(jsUser["full_name"]);

// console.log(jsUser[mySym]); // undefined
// console.log(jsUser.mySym); // mykey1

// console.log(typeof (jsUser[mySym])); // undefined
// console.log(typeof (jsUser.mySym)); // string


// right way of using symbol datatype in objects
const useSymbol = {
    name: "Sanjiv",
    [mySym] : "mykey1"
}

// console.log(useSymbol[mySym]); // mykey1
// console.log(typeof (useSymbol[mySym]));
// console.log(useSymbol);

// => change values of a object
jsUser.email = "sanjiv@gmail.com";//value update successfully
// console.log(jsUser)

// => lock values
// Object.freeze(jsUser);
jsUser.email = "sanjiv@apple.com"; // value not updated
// console.log(jsUser)

// adding functions on the objects
jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

// console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); //hello js user
console.log(jsUser.greetingTwo()) //hello js user, Sanjiv
