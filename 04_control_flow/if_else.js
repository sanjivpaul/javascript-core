// # if else
// # nesting
const userLogedIn = true
if (userLogedIn) {
    // console.log("User loged in ");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 500;
if (score > 100) {
    const power = "wings"
    // console.log(`User Power: ${power}`);
}

// implicit declaration
const balance = 5000
// if (balance > 1000) console.log("Balance is more than 1000");

// # nesting: if, else if, else

// const temp = 41
// if (temp < 30) {
//     console.log("Weather is cool");
// } else if (temp < 40) {
//     console.log("Weather is Normal");
// } else if (temp < 50) {
//     console.log("Weather is hot");
// } else {
//     console.log("Weather is to hot");
// }

// # Check Multiple Cases:
// # && (AND)=> required both condition true 
// # || (OR)=> required only one condition true
const userLoggedIn = true;
const debitCard = true;
const userLoggedInGoogle = false
const userLoggedInEmail = true

if(userLogedIn && debitCard){
    // console.log("Allow to buy cources");
}

if(userLoggedInGoogle || userLoggedInEmail){
    // console.log("User Logged In");
}

