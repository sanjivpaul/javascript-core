// take user details for register a form
const accountId = 14072000;
let accountEmail = "sanjiv123@sanjiv.com";
var accountPassword = "12345";
accountCity = "jamshedpur";
let accountState; //variable declared but value is not assigned

// accountId = 5;//assignment is not allowed in constant variable

accountEmail = "sp@sp.com"
accountPassword = "121212"
accountCity = "Ghatsila";


/* Scope: simply {} curly braces are called as scope 
// example:
{
    // block scope 
    // functional scope
}

if (condition) {
    // block scope
}

*/


/* const, var, and let diff:
const => nor re-declaration neither value updating

var => global scope
    => re-declaration is allowed

let => block scope
    => functional scope
    => no re-declaration only updating value is allowed

*/


console.log("accountId=",accountId);
console.log("hello babu");
console.log(accountCity);

// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

const myFunction = function() {
    //block scope
    //function scope
    var msg = "this is block scope";
    
}

myFunction()
// console.log(myFunction());
