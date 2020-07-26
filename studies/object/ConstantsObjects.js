// people -> memory 123 {...}
const people = {name: 'Junior'}
people.name = 'Paulo'
console.log(people)
console.log()

//people -> memory 456 -> {...} 
//people = {name: 'Ana'} // people is constant

Object.freeze(people)

people.name = 'John'
people.adress = 'Street ABC'
delete people.name

console.log(people.name)
console.log(people)

const constPeople = Object.freeze({name: 'Arthur'})
constPeople.name = 'Maria'
console.log(constPeople)
