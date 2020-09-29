const father = {name: 'John', colorHair: 'black'}

const daughter1 = Object.create(father)
daughter1.name = 'Ana'
console.log(daughter1.colorHair)

const daughter2 = Object.create(father, {
    name: {value: 'Bia', writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = 'Alice'
daughter2.age = 10
console.log(`${daughter2.name} has ${daughter2.colorHair} hair.`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for (let key in daughter2) {
    daughter2.hasOwnProperty(key) ?
    console.log(`Only object property: ${key}`) : console.log(`By inheritance: ${key}`)
}


