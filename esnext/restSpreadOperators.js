// rest (get together) and spread
// 1) function parameter
// 2) spread with object
const employee = {name: 'Maria', salary: 12348.99}
const clone = {active: true, ...employee}
console.log(clone)

// 3) using spread with array
const groupA = ['John', 'Pedro', 'Lucas']
const finalGroup = ['Maria', groupA, 'Rafaela']
console.log(finalGroup)