// Prototype Inheritance


const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}.`
  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })
  return bio
}

Person.prototype.setName = function(fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];

}

const person1 = new Person('John', 'Doe', 23, ['Reading', 'Biking'])
person1.setName('Alexis Doe');
console.log(person1.getBio());

const person2 = new Person('Mariah', 'Doe', 23)
console.log(person2.getBio());
