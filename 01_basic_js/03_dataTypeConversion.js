let score = 33; // we know the type of score because i assigned that
let scoreString = "33";
// but if value is 33ab
// let newScore = "33ab"; //NaN
// let newScore = null; // this is 0
// let newScore = undefined; // NaN
// let newScore = true; // 1
let newScore = false; // 0

// const {score} = req.body; // this score is directly come from frontend so we dont know the type of score

// console.log(typeof score); //number
// console.log(typeof (score)); //number
// console.log(typeof scoreString); //string

// typeconversion
let valueInNumber = Number (scoreString);
// console.log(typeof valueInNumber); // number

let newValueInNumber = Number (newScore);
// console.log(typeof newValueInNumber); // number => it is convert in number but 33ab is not a number so this conversion is wrong
// console.log(newValueInNumber); // NaN => the value in NaN mean Not an Number

// "33" => 33
// "33ab" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN 

// boolean conversions
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn); //boolean
// console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// ""=> false => empty string
// "sanjiv" => true

// ********************************* Operations **********************************

let value = 5;
let negValue = -value;
// console.log(negValue); //-5

// console.log(2+2); //4
// console.log(2-2); // 0
// console.log(2*2); //4
// console.log(2**3); // 8
// console.log(2/2);// 1
// console.log(2%3); //2 => reminder

let str1 = "hello";
let str2 = " sanjiv";
let str3 = str1 + str2;
// console.log(str3); // hello sanjiv

// console.log("2"+ 2); // 22
// console.log(2+ "2"); // 22
// console.log("2"+ 2 + 3); // 223
// console.log(2+ "2" + 3) ; // 223
// console.log(2+ 2 + "3") ; // 43

// console.log(+true); // 1
// console.log(+""); // 0

let gameCounter = 5;
let totalScore = gameCounter++;
console.log(`gameCounter: ${gameCounter}, totalScore: ${totalScore}`); //6, 5
console.log("gameCounter:", gameCounter, "totalScore:", totalScore); //6, 5

let gameCounter2 = 5;
let totalScore2 = ++gameCounter2;
console.log(`gameCounter2: ${gameCounter2}, totalScore2: ${totalScore2}`); //6, 6


