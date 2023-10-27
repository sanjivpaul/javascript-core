// higher order loops: for of, maps
// # for of:
// ["", "", ""]
// [{}, {}, {}]

// for of: in array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); // print all the elements of the array
}

// for of loop : in string
const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each Char is: ${greet}`);
}

// # Maps: key value pairs, retunr unique value
const map = new Map()
map.set("IN", "India");
map.set("USA", "United state Of America");
map.set("FR", "France");
map.set("IN", "India"); // map will ignore it and return unique value

// console.log(map);

// for of: in map
for (const key of map) {
    // console.log(key)
}
// It will return array of key value pair
// we can destructure map in for of
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}
// now we get key and value

// # for of: In Objects

const myGames = {
    "game1":"GTA5",
    "game2":"Max Pyne",
    "game3":"CS Go"
}

for (const [key, value] of myGames) {
    // console.log(`${key} :- ${value}`); // error we cant iterate object in for of loops
}



