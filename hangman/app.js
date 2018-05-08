// product --> Object.prototype --> null

const product = {
  name: 'Influence'
}

// hasOwnProperty
// console.log(product.hasOwnProperty('name')) // return true
// console.log(product.hasOwnProperty('price')) // return false
console.log(product.hasOwnProperty('hasOwnProperty')) // return false
console.log(product)