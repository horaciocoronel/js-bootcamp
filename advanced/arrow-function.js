const square = (num) => num * num

const squarelong = (num) => {
  return num * num
}

console.log(square(5))

const people = [{
  name: "Louis",
  age: 27
},
{
  name: "Leenah",
  age: 32
},
{
  name: "Mariah",
  age: 21
}]

const under30 = people.filter(function(person) {
  return person.age < 30
})
console.log(under30)

const under30af = people.filter((person) => person.age < 30)
console.log(under30af)

//Challenge
// 1. find the person with age of 21
// 2. print that persons name

const findPerson = people.find((person) => person.age === 21)

console.log(findPerson)