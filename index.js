var inquirer = require("inquirer");
var Word = require("./word.js");
var randomWords = require('random-words');
var currentWord;
var guessedLetters;

function startGame() {
    currentWord = new Word(randomWords());
    guessedLetters = [];
    attempts = 10;
    guess();

}

function guess() {

    if (attempts > 0) {

        if (currentWord.checkWin()) {
            console.log(currentWord.changeDisplay());
            console.log("You Win!");
            playAgain();
        }
        else {

            console.log("Attempts left: " + attempts);
            console.log("Guessed letters: " + guessedLetters);
            console.log(currentWord.changeDisplay());

            inquirer.prompt([
                {
                    type: "input",
                    name: "guess",
                    message: "Guess a letter"
                }]).then(function (player) {

                    if (validate(player.guess)) {

                        if (currentWord.check(player.guess)) {
                            guessedLetters.push(player.guess);
                            console.log("Correct!");
                            guess();
                        }

                        else {
                            guessedLetters.push(player.guess);
                            console.log("Incorrect :(");
                            attempts--;
                            guess();
                        }
                    }

                    else {
                        console.log("Please enter a letter you haven't entered yet.");
                        guess();
                    }
                })
        }
    }
    else {
        console.log("You Lose!");
        console.log("The word was " + currentWord.word);
        playAgain();
    }
}

function playAgain(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "again",
            message: "Play again?"
        }]).then(function (player){
            if (player.again){
                startGame();
            }
            else{
                console.log("Bye!");
            }
        })
}

function validate(newGuess) {
    var valid = true;
    guessedLetters.forEach(function (letterToCheck) {
        if (newGuess === letterToCheck) {
            valid = false;
        }
    })

    if (!/[a-z]/.test(newGuess)) {
        valid = false;
    }

    if (newGuess.length != 1) {
        valid = false;
    }

    return valid;

}

startGame();