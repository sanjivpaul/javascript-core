// Scope: {inside curly braces all the code is block scope}
// let a = 10;
// const b = 20;
// var c = 30;
let a = 500

// there is no issue we can simply print all the variables
// console.log(a);
// console.log(b);
// console.log(c);

// if all the variables are under in any scope then there is problem arise
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER a:", a); // this is scope variable
}

// console.log(c); // simply we can print c because var is not scope variable
// console.log(a); // error: let scope variable
// console.log(b); // error: const is scope variable we can not use from outside of the scope 

console.log("OUTER a:", a);// this a is global variable

// # How Nested Scope Is Work?
// # What Is Clouser?

// # How Nested Scope Is Work?
function one(){
    const username = "sanjiv"

    function two(){
        const website = "github"
        console.log("USERNAME:",username);
    }

    // console.log(website); // outer scope can not access inner scope

    two()
}

one()

// * Nested Scope with if consdition
if(true){
    const user = "sanjiv"
    if(user === "sanjiv"){
        const website = "github"
        console.log(user + website);
    }
    // console.log(website); // cant access inner scope
}
// console.log(user); // cant access inner scope


// # What Is Clouser?
// Ans: Clouser Means Child can Access Parents Elements 


// ****************** Hoisting (execution context) ***************************
// 1.Normal Function: we can call this function before declaration
addOne(5);
function addOne(num){
    return num + 1;
}


// 2.Expression Function: we can not call this function before declaration
// addTwo(5) // => it gives error because we call it before declaration 
const addTwo = function(num){
    return num + 2
}

