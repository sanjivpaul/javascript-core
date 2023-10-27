// # Immediately Invoked Function Expression (IIFE): (function definition)(execution call) =>()()
// # What is IIFE? why we use IIFE? (INTERVIEW QUESTION)
// Ans: global scope ke polution se prblm hoti hai to global scope ke vaiable or global scope ke declaration ke polution ko hatane ke liye IIFE ka use krte hai 

// @Note: After write IIFE function termination is required cemicolon is required after IIFE function

// example IIFE with noraml function
(function dbConnection(){
    // @Note: this is named IIFE
    console.log("DB CONNECTED");
})(); // cemicolon is required


// example IIFE with arrow function
(()=>{
    // @Note: this is unnamed IIFE
    console.log("DB CONNECTED TWO");
})();

// IIFE with arrow function passing arguments
((dbName)=>{
    console.log(`DB CONNECTED ${dbName}`);
})("MongoDB");

// @Note: For writing two IIFE cemicolon is required
