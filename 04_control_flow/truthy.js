// # Truthy value and Falsy Value
// # Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// # Truthy Values: true, 1, "0", "false", " ", [], {}, function(){}
// # Nullish Coalescing Operator (??): null undefined
// # Terniary operator => condition ? true : false

// handle empty array
const users = []

if (users.length === 0) {
    // console.log("Users Array is empty");
}

// handle empty object
const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    // console.log("Object is empty");
}

// Interview Key Points:
// false == 0 => true
// false == "" => true
// 0 == "" => true

// # Nullish Coalescing Operator (??): null undefined
// user for handeling errors

// val1 = 5 ?? 10 //5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 10 // 10
val1 = null ?? 10 ?? 20 // 10 => in this case take first value


// console.log(val1);

// # Terniary operator => condition ? true : false

const startbucksCoffePrice = 555

startbucksCoffePrice <= 250 ? console.log("Less than 250") : console.log("More than 250");