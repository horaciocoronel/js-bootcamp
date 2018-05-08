// Primitive value: string, number, boolean, null. undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function : myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
const team = new Array(['Luke', 'Madison'])
console.log(team.hasOwnProperty('filter'));


const getScore = () => 1;
console.log(getScore);


const product = 'Computer'
console.log(product.split(""))

const otherProduct = new String('Phone')
console.log(otherProduct)