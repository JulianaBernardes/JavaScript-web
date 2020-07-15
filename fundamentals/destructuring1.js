const people = {
    name: 'Ana',
    age: 5,
    adress: {
        street: 'ABC',
        number: 1000
    }

}

const { name, age} = people
console.log(name, age)

const {name: n, age: a} = people

console.log(n, a)

const {surname, happiness = true} = people
console.log(surname, happiness)

const {adress: {street, number, postalCode}} = people
console.log(street, number, postalCode)

//const {account: {ag, num}} = people //error
//console.log(ag, num)