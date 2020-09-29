// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Improvements in literal notation
const name = 'Junior'
const person = {
    name,
    hello() {
        return 'Hi guys!'
    }
}
console.log(person.name, person.hello())

// Class
class Animal {}
class Dog extends Animal {
    speak() {
        return 'Au au!'
    }
}

console.log(new Dog().speak())
