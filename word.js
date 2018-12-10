var Letter = require("./letter.js");

function Word(word){
    this.word = word;
    this.makeArray = function(word){
        letters = word.split("");
        newArray = letters.map(function(letter){
            return new Letter(letter);
        });
        return newArray;
    }
    this.lettersArray = this.makeArray(this.word);
    this.check = function(guess){
        var correctGuess = false;
        this.lettersArray.forEach(function(item){
            if (item.check(guess)){
                correctGuess = true;
            };
        });
        return correctGuess;
    };
    this.changeDisplay = function(){
        var concatenatedWord = "";
        this.lettersArray.forEach(function(item){
            concatenatedWord += item.visibleCharacter;
        });
        return concatenatedWord;
    }
    this.checkWin = function(){
        win = true;
        this.lettersArray.forEach(function(item){
            if (item.guessed === false){
                win = false;
            }
        })
        return win;
    }
};

function testing(testWord){
    var newWord = new Word(testWord);
    console.log(newWord.word);
    console.log(newWord.lettersArray);
    newWord.check("e");
    console.log(newWord.lettersArray);
}

//testing("HelloWorld");

module.exports = Word;