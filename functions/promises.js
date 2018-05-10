// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, 'this is the callback')
    callback('this is the callback err')
  }, 2000)
}

getDataCallback((err, data) => {
  if(err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('this is the promise data');
    reject('this is my promise error')
  },2000)
});

myPromise
  .then((data) => {
    console.log(data)
  }), (err) => {
    console.log(err)
  }
  