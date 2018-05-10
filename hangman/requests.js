const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      resolve(data.puzzle);
    } else if (e.target.readyState === 4) {
      reject('An error has occurred')
    }
  })
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
}
)

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