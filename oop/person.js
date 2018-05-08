// Prototype Inheritance

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
  }
  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.lastName} is a ${this.position}`
    // name is a position
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

const employee1 = new Employee('Claire', 'Doe', 23, 'Manager', ['biking'])
console.log(employee1)
employee1.setName('Alexis Doe');
console.log(employee1.getBio());
console.log(employee1.getYearsLeft())

const person1 = new Person('John', 'Doe', 23, ['Reading', 'Biking'])

person1.getBio = function() {
  return 'this is fake'
}
person1.setName('Alexis Doe');
console.log(person1.getBio());


const person2 = new Person('Mariah', 'Doe', 23)
console.log(person2.getBio());

Person.prototype.getBio = function() {
  return 'testing testing'
}
console.log(person2.getBio());

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  updateGrade(change) {
    this.grade += change
  }
  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status}`
  }

}

const student1 = new Student('Laura', 'Doe', 23, 88, ['biking', 'reading'])
console.log('-------------------------------');
console.log(student1.getBio())
student1.updateGrade(-20)
console.log(student1.getBio())
// console.log(student1)