const Person = function(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const me = new Person('John', 'Doe', 23)
const person2 = new Person('Mariah', 'Doe', 23)
console.log(person2);
