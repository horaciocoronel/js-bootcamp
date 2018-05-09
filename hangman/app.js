const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses")
const game1 = new Hangman('Cat bus', 2); 

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage;
})

getPuzzle("2", (error, puzzle) => {
  if(error) {
    console.log(`${error}`)
  } else {
    console.log(puzzle)  
  }
})

getCountryDetails("CA", (error, country) => {
  if(error) {
    console.log(`${error}`)
  } else {
    console.log(`Country name: ${country.name}`)  
  }
})



