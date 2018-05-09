// const myFunction = () => {
//   const message = 'this is my message'
//   const printMessage = () => {
//     console.log(message);
//   }
//   return printMessage
// }

// const myPrintMessage = myFunction()

// myPrintMessage()

const createCounter = () => {
  let count = 0
  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}

const counter = createCounter();
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

// tipper 
const createTipper = (basetip) => {
  return(amount) => {
    return basetip * amount
  }
}
const tip15 = createTipper(0.15);
console.log('tipper 15', tip15(130));

const tip35 = createTipper(0.35);
console.log('tipper 35', tip35(130))