const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback('And the error has taken place', undefined)
    }
  })
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
}

const getCountryDetails = (countryCode, callback) => {
  const req = new XMLHttpRequest();
  req.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText); 
    const countryData = data.find((country) => country.alpha2Code === countryCode)
    callback(undefined, countryData)
    } else if (e.target.readyState === 4) {
      callback('Something went wrong', undefined)
    }
  })
  req.open('GET', 'https://restcountries.eu/rest/v2/all')
  req.send()
}