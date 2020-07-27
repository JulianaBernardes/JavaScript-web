const people = {
    name: 'Junior',
    age: 2,
    weight: 13
}

console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people))
console.log()

Object.entries(people).forEach(([key, value]) => {
    console.log (`${key}: ${value}`)  
})
console.log()

Object.defineProperty(people, 'birthDate', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

people.birthDate = '01/01/2017'
console.log(people.birthDate)
console.log(Object.keys(people))
console.log()

// object.assign
const dest = {a: 1} // dest is not changed
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

//Object.freeze(obj)
obj.c = 1234
console.log(obj)