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

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
  if(e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    // console.log(data)
  } else if (e.target.readyState === 4) {
    console.log('And the error has taken place')
  }
}
)
request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()

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