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



