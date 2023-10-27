const gameLevel = 5;
// console.log(gameLevel); // 5

const balance = new Number(555);
// console.log(balance); // [Number : 555]

let balanceToString = balance.toString(); // 555 => converted to string
// console.log(balanceToString.length);// return the length of the string

// console.log(balance.toFixed(3)); // 555.000
// console.log(balance.toFixed(2)); // 555.00
// console.log(balance.toFixed(1)); // 555.0

// toPrecision => return a precise value
const otherNumber = 55.4789;
// console.log(otherNumber.toPrecision(1)); //6e+1
// console.log(otherNumber.toPrecision(2)); //55
// console.log(otherNumber.toPrecision(3)); //55.5
// console.log(otherNumber.toPrecision(4));//55.48
// console.log(otherNumber.toPrecision(5));//55.479

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // "en-IN" => this is converted into indian number system

// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324


// *********************** Maths ******************************

// console.log(Math);
// console.log(Math.abs(-4)); // 4 => return absolute value |-4|
// console.log(Math.round(4.6)); // 5 => 
// console.log(Math.ceil(4.2)); // 5 => ceil => gives upper value
// console.log(Math.floor(4.9)); // 4 => floor => gives lower value
// console.log(Math.min(4, 1, 5, 7)); // 1
// console.log(Math.max(4, 1, 5, 7)); // 7

console.log(Math.random()); // it return value under range of 0 to 1
console.log(Math.random()*10); // there may be 0 returned for solve this problem we have to add +1 with this value

console.log((Math.random()*10) + 1); // good practice
console.log(Math.round(Math.random()*10) + 1);

// formula for find min max => generic formula
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // => genieric fomula

// https://github.com/sanjivpaul/javascript-revision

