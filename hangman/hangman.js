// 1. Create Constructor function for the hangman game
// 2. Setup two atributes. one for the word itself, another for the number of guesses allowed
// 3. Create two instances of it and print both to the console

const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split("")
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';
  this.word.forEach(letter => {
    if(this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter
    } else {
      puzzle += "*"
    }
  });
  return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess)
  if(isUnique) {
    this.guessedLetters.push(guess)
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses-- // similar to this.remainingGuesses -= 1
  }
}

const game1 = new Hangman('Cat', 2);
// Guess c, t, z
console.log(game1.getPuzzle()) // c*t
// print remaining guesses (should be 1 )
console.log(game1.remainingGuesses)

const game2 = new Hangman('Toronto', 4)
// Guess t
console.log(game2.getPuzzle()); // t****t*
console.log(game2.remainingGuesses)

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess)
  console.log(game1.getPuzzle()) // c*t
  console.log(game1.remainingGuesses)
})