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

const getCountryDetails = (countryCode) => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      } else {
        throw new Error('Unable to fetch data')
      }
    })
    .then((data) => data.find((country) => country.alpha2Code === countryCode))
  }