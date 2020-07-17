const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in grades) {
    console.log(i, grades[i])
}

const people = {
    name: 'Ana',
    surname: 'Silva',
    age: 29,
    weigth: 64
}

for(let attribute in people) {
    console.log(`${attribute} = ${people[attribute]}`)
}

//console.log(attribute) //not defined