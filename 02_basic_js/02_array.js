const marvel_heros = ["ironman", "thor", "spiderman", "venom"];
const dc_heros = ["batman", "flash", "wonderwomen", "superman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// ['ironman', 'thor', 'spiderman', 'venom', [ 'batman', 'flash', 'wonderwomen', 'superman' ]] => here dc_heros inserted as complete array

// console.log(marvel_heros[4][0]); // batman

// ********** concat() ***************

const myHeros = marvel_heros.concat(dc_heros);
// console.log(myHeros); 
// ['ironman','thor','spiderman','venom','batman','flash''wonderwomen','superman']

// ********* spreed operator ****************
// spread operator => ... (3 dot)

const myNewHeros = [...marvel_heros, ...dc_heros];
// console.log(myNewHeros); // same result as concate but more efficient way

// ****** flat() ******
const anotherArray = [0, 1, 2, [4, 3, 5], 8, [1, 6, [5, 7]], 9]; 
// complex array => array conatains array of array
const real_another_array = anotherArray.flat(Infinity); 
//flat(depth)
// console.log(real_another_array); 
//[0, 1, 2, 4, 3, 5, 8, 1, 6, 5,7, 9]


// ************** data scraping technique ****************
console.log(Array.isArray("Sanjiv")); // false

// convert into array
console.log(Array.from("Sanjiv"));//[ 'S', 'a', 'n', 'j', 'i', 'v' ]
console.log(Array.from({name: "Sanjiv"})); // [] => empty array => interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]