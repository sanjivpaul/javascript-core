const name = "Sanjiv";
const marksObtain = 455;

//console.log(name + " marks " + marksObtain); // Sanjiv marks 455 => this syntax is outdated

// Backticks=> ``
    // benifits=> string interpollation => ${} => placeholder

// console.log(`Hello my name is ${name} and my marks are ${marksObtain}`);
// Hello my name is Sanjiv and my marks are 455

// Another way of declaring string
const gameName = new String("sanjiv");
// console.log(gameName);

// console.log(gameName[0]); // s
// console.log(gameName.__proto__); // {}

// some methods of strings
// console.log(gameName.length); // 6
// console.log(gameName.toUpperCase()); // SANJIV
// console.log(gameName.substring()); // sanjiv
// console.log(gameName.charAt(2)); // n
// console.log(gameName.indexOf("n")); // 2

const newString = gameName.substring(0, 4);
// console.log(newString); //sanj

const newStringOne = gameName.slice(0, 4); // => negative slicing is possible
// console.log(newStringOne); //sanj

const instaName = "   paulsanjiv  ";
const newStringTwo = instaName.trim(); // => it remove extra spaces
// console.log(instaName); //   paulsanjiv  
// console.log(newStringTwo); //paulsanjiv


const url = "https://sanjivpaul.com/sanjiv%20events";
console.log(url.replace("%20", "-")); //https://sanjivpaul.com/sanjiv-events

console.log(url.includes("sanjiv")); //true
console.log(url.includes("dev")); //false

const words = "sanjiv-paul-is-a-good-dev"
console.log(words.split("-")); //[ 'sanjiv', 'paul', 'is', 'a', 'good', 'dev' ] => splited and created as array



