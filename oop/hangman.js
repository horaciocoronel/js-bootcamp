// 1. Create Constructor function for the hangman game
// 2. Setup two atributes. one for the word itself, another for the number of guesses allowed
// 3. Create two instances of it and print both to the console

const Hangman = function(word, remainingGuesses) {
  this.word = word
  this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('Cat', 2);
console.log(game1)
const game2 = new Hangman('Toronto', 4)
console.log(game2)