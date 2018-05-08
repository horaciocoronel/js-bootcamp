// Arguments only exist on regular functions not arrow functions
const add = function() {
  return arguments[0] + arguments[1]
}
console.log(add(11, 22, 33, 44))

const car = {
  color: "Red",
  getSummary: function() {
    return `the car is ${this.color}`
  }
}

console.log(car.getSummary())

// we won't have access to this binding in arrow functions
const carAf = {
  color: "Red",
  getSummary: () => {
    return `the car is ${this.color}`
  }
}

console.log(carAf.getSummary())

// rewriting the function to be able to bind this
const carAfWorkaround = {
  color: "Red",
  getSummary() {
    return `the car is ${this.color}`
  }
}

console.log(carAfWorkaround.getSummary())