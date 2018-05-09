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

getPuzzle((error, puzzle) => {
  if(error) {
    console.log(`${error}`)
  } else {
    console.log(puzzle)  
  }
})



const req = new XMLHttpRequest();
req.addEventListener('readystatechange', (e) => {
  if(e.target.readyState === 4 && e.target.status === 200) {
  const countryCode = 'CA'
  const data = JSON.parse(e.target.responseText); 
  const countryData = data.find((country) => country.alpha2Code === countryCode)
  console.log(countryData.name) 
  } else if (e.target.readyState === 4) {
    console.log('error')
  }
})
req.open('GET', 'https://restcountries.eu/rest/v2/all')
req.send()