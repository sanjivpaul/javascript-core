// # while loop
// # do while loop => it will run at least one time

let index = 0;
while (index <= 10) {
    // console.log(`value of index:${index}`);
    index = index + 2;
}

// array iterate
let dc = ["Batman", "Superman", "Aquaman", "Flash"]
let arrIndex = 0;
while(arrIndex<dc.length){
    // console.log(`DC heros are ${dc[arrIndex]}`);
    arrIndex = arrIndex + 1
}

// do while loop

// let score = 1;
// if score is 11 then it will print once then exit from loop
let score = 11

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);