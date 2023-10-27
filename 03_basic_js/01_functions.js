//  functions

function myName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("I");
    console.log("V");
}

// myName();
// myName();

// way:01

// function addTwoNum(num1, num2){
//     console.log(num1 + num2); // ye bas console print krta hai return ni karta 

// }

// addTwoNum(3, 5); // 8
// let result = addTwoNum(3, 5); // 8
// console.log("result:", result); //undefined => result ki value

// way:02 => return type
function addTwoNum(num1, num2){

    const result = num1 + num2;
    return result
}


let result = addTwoNum(3, 5); // 8
// console.log("result:", result); //undefined => result ki value
// console.log("result:", result); // result = 8 => when function will return

function logInUserMessage(username){
    return ` ${username}, just logged in`
}

// console.log(logInUserMessage("sanjiv"));

// CASE:1=> when we don't know how many arguments are the:
// function calculateCartPrice(num){
    // return num;
// }

// console.log(calculateCartPrice(200, 300, 400));// 200=>only first element will print

// * Rest operator(...) => 3 dot:=> we can handle this problem by using  rest operator
// ex:1
// function calculateCartPrice(...num){
//     return num
// }
// console.log(calculateCartPrice(200, 300, 400));// [ 200, 300, 400 ] => now all the values are packed in one array

// ex:2
function calculateCartPrice(val1, val2, ...num){
    return num
}
// console.log(calculateCartPrice(200, 300, 400, 500));// [ 400, 500 ] => it will print after two value 

// * Pass object in function
const user = {
    username:"sanjiv",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user); //Username is sanjiv and price is 199
// handleObject({
//     username:"sanjiv",
//     price:199
// }) //Username is sanjiv and price is 199

// * Pass Array in functions
const myArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray)); // 300
