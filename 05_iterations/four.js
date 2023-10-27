// # for in loop:
// #objects in loops: for in loop

const myLanguage = {
    js: "Javascript",
    ts: "TypeScript",
    cpp: "C++",
    java: "Java",
    rb: "Ruby"
}

// print all the keys by usibg for in loop
for (const key in myLanguage) {
    // console.log(key); 
}

// print key and value using for in loop
for (const key in myLanguage) {
//    console.log(`${key} shortcut is for ${myLanguage[key]}`);
}

// for in loop: in array
const programming = ["js", "py", "rb", "java", "cpp"]

for(const key in programming){
    // console.log(key); // it will retun the index of the array or key of the array
    // console.log(programming[key]); // print value of the array
}

// maps in for in loop:
const map = new Map()
map.set("IN", "India");
map.set("USA", "United state Of America");
map.set("FR", "France");
map.set("IN", "India"); // map will ignore it and return unique value

// console.log(map);

// for of: in map
for (const key in map) {
    console.log(key)
}
