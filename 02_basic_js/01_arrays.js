// array => is a object contains collection multiple elements in single variable 
    // => resizable
    // => mixed datatype => string, number, boolean, object, array etc
    //  => array[index] => accessing through
    // => base index => 0
    //  => array copy operations => operations directly to reference value (original value will be change)



const myArray = [0, 1, 2, 3, 4]; //numbers based
const myHeros = ["shaktiman", "nagaraj"]; // string based

const myArr = new Array(1, 2, 3, 4);
// console.log(myArr); //[ 1, 2, 3, 4 ] => brakets automatically created

// console.log(myArray[0]);

// Array Methods:
myArr.push(5); // [ 1, 2, 3, 4, 5 ] => insert at end
myArr.push(6); // [ 1, 2, 3, 4, 5, 6 ]
myArr.pop(); // [ 1, 2, 3, 4, 5, ] =>  remove from end

myArr.unshift(0); // [ 0, 1, 2, 3, 4, 5 ] => insert at start
myArr.unshift(7); //[7, 0, 1, 2,3, 4, 5 ]

myArr.shift(); //[ 0, 1, 2, 3, 4, 5 ] => remove from start

// console.log(myArr.includes(9)); // false => includes use for seraching
// console.log(myArr.indexOf(2));

const newArr = myArr.join(); // join converted array into a string, comma separated string

// console.log(myArr);
// console.log(typeof newArr); // string

// slice, splice:

console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myArr1 = myArr.slice(1, 3);
console.log(myArr1); // [ 1, 2 ]

console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myArr2 = myArr.splice(1, 3) // => splice manipulate original array
console.log("C", myArr); // C [ 0, 4, 5 ]
console.log(myArr2); // [ 1, 2, 3 ]