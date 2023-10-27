// for loop:
// break and continue:

// print 0 to 9 
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}

// nested for loop:
for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop value ${j} and Inner Loop ${i}`);

    }

}


// table printing for loop:
for (let i = 1; i <= 10; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(` ${i} * ${j} =  ${i * j}`);
    }
}

// # for loop with array
const dcCharacters = ["Flash", "Batman", "Superman", "Aquaman"];

for (let i = 0; i < dcCharacters.length; i++) {
    const element = dcCharacters[i];
    // console.log(element);
}

// break and continue:

for(let i = 1; i<=20; i++){
    if(i == 5){
        // console.log("5 is detected");
        break; // control flow will exit
    }
    // console.log(`value of i: ${i}`);
}


for(let i = 1; i<=20; i++){
    if(i == 5){
        console.log("5 is detected");
        continue; // skip current itteration but dont exit from loop
    }
    console.log(`value of i: ${i}`);
}
