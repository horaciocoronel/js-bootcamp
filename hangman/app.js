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

getPuzzle('2')
  .then((puzzle) => console.log(puzzle))
  .catch((err) => console.log(`Error: ${err}`))

getLocation()
  .then((location) => {
    return getCountryDetails(location.country)
  })
  .then((country) => console.log(country.name))
  .catch((err)=> console.log(err))