function Letter(character){
    this.character = character;
    this.guessed = false;
    this.visibleCharacter = "_";
    this.check = function(guess){
        if (guess === this.character){
            this.guessed = true;
            this.visibleCharacter = this.character;
            return true;
        }
    }
};

function testing(x) {
    var testLetter = new Letter(x);
    console.log(testLetter.character);
    console.log(testLetter.guessed);
    console.log(testLetter.update());
    testLetter.check("A");
    console.log(testLetter.guessed);
    console.log(testLetter.update());
};

//testing("A");

module.exports = Letter;