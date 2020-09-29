// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'any', price: 1.99, tag: 'promotion'
})
console.log('Extensible', Object.isExtensible(product))

product.name = 'eraser'
product.description = 'white eraser'
delete product.tag
console.log(product)

// Object.seal cant add or delete object attributes
const people = {name: 'Juliana', age: 25}
Object.seal(people)
console.log('Sealed', Object.isSealed(people))
people.surname = 'Silva'
delete people.name
people.age = 29
console.log(people)

// Object.freeze = sealed + constant values
