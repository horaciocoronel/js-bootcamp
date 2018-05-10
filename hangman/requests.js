const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      } else {
        throw new Error(`Unable to fetch the puzzle`)
      }
    })
    .then((data) => {
      return data.puzzle
    }
    )
}

const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {
  const req = new XMLHttpRequest();
  req.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText); 
    const countryData = data.find((country) => country.alpha2Code === countryCode)
    resolve(countryData)
    } else if (e.target.readyState === 4) {
      reject('Something went wrong')
    }
  })
  req.open('GET', 'https://restcountries.eu/rest/v2/all')
  req.send()
}
)