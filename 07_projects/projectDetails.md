# Projects of DOM
## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project - 01 Color Changer Code

```javascript
const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body")

buttons.forEach(function (button) {
    // console.log(button)
    button.addEventListener("click", function (e) {
        // console.log(e);
        // console.log(e.target);

        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
    });
})
```


## Project 02 BMI Calculator JS Code
```javascript
// how to get inputs from form


const form = document.querySelector("form");
// console.log(form);
// if we load inputs then inputs are empty
// const height = parseInt(document.querySelector("#height").value) // empty

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value) // convert value into integer
    // console.log(height);
    const weight = parseInt(document.querySelector("#weight").value)
    // console.log(weight);
    const results = document.querySelector("#results")
    const message = document.querySelector("#message")

    if (height === "" || height < 0 || isNaN(height)) {
        results.style.color = "red";
        results.innerHTML = `Please given a valid height ${height}`
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        results.style.color = "red";
        results.innerHTML = `Please given a valid weight ${height}`
    }else{
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        results.style.color = "green";
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`

        if(bmi < 18){
            message.style.color = "orange";
            message.innerHTML = `You are Under Weight`
        }else if(bmi< 24.9){
            message.style.color = "blue";
            message.innerHTML = `Normal Range`
        }else{
            message.style.color = "orange";
            message.innerHTML = `OverWeight`
        }
    }

})
```

## Project 03 Digital Clock JS Code
```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock");
// console.log(clock);

const day = document.getElementById("day");
const cdate = document.getElementById("date");



setInterval(function () {
    let date = new Date()
    let currDate = date.toDateString().slice(3)
    let currDay = date.toDateString().split(" ")[0];
    if(currDay === "Sat"){
        day.innerHTML = "Saturday";

    }else if(currDay === "Sun"){
        day.innerHTML = "Sunday";
    }
    // console.log(date.toDateString());
    // console.log(currDate);
    // console.log(currDay);
    cdate.innerHTML = currDate;
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## Project 04 Guess The Number Game JS Code
```javascript
// console.log(Math.round(Math.random() * 100) + 1);
let randomNumer = parseInt(Math.random() * 100 + 1)
// console.log(randomNumer);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultsArea")

const p = document.createElement("p");

// storing previous guess numbers
let prevGuesses = [];
let numOfGuesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = userInput.value;
        // console.log(guess);
        validateGuesses(guess)
    })
}

// validate number is not more than 100
function validateGuesses(guess) {
    if (guess > 100) {
        alert("please enter a number less than 100")
    } else if (guess < 1) {
        alert("please enter a number more than 1")
    } else if (isNaN(guess)) {
        alert("please enter a valid number")
    } else {
        prevGuesses.push(guess);
        if (numOfGuesses === 11) {
            displayGuesses(guess);
            dispalyMessage(`Game Over. Random number was ${randomNumer}`)
            endGame();
        }
        else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

// check number is less, greater or equal to random number
function checkGuess(guess) {
    if (guess == randomNumer) {
        dispalyMessage(`🌟✨🌟You guessed it right🎉🎉🎉`)
        endGame();
    } else if (guess < randomNumer) {
        dispalyMessage(`Number is TOO low`)
    } else if (guess > randomNumer) {
        dispalyMessage(`Number is TOO high`)
    }
}

// handle how many guesses are available or update prev guess and remaining guess
function displayGuesses(guess) {
    userInput.value = ""; // clean user input
    guessSlot.innerHTML += `${guess}, `;
    numOfGuesses++;
    remainingGuesses.innerHTML = `${11 - numOfGuesses}`

}

// handle low or high
function dispalyMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}


function endGame() {
    // clear all the input fields
    userInput.value = "";
    userInput.setAttribute("disabled", ""); //input disabled
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p); // adding button to startover class
    playGame = false;
    newGame()


}

function newGame() {
    const newGameButton = document.querySelector("#newGame"); // select newGame id
    newGameButton.addEventListener("click", function (e) {
        randomNumer = parseInt(Math.random() * 100 + 1); //new random number
        prevGuesses = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = "";
        remainingGuesses.innerHTML = `${11 - numOfGuesses}`
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
        location.reload()

    })
}

```

## Project 05 Keyboard JS Code
```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
    
    <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>

    `
})
```

## Project 06 Unlimited Color JS Code
```javascript
// generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}
// console.log(Math.floor(Math.random() * 16));
console.log(randomColor());
const box = document.querySelector('#box')
// const chnageColor = box.style.backgroundColor = randomColor()


let intervalId;
const startChangingColor = function () {
    // saftey check
    // if intervalId is null then add intervalId
    if (!intervalId) {
        intervalId = setInterval(changeBoxColor, 1000)
    }
    function changeBoxColor() {
        box.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null; //for memory utilization
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
```

