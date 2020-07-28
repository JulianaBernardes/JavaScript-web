const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop() // removes last element
console.log(pilots)

pilots.push('Verstappen') // add a new last element
console.log(pilots)

pilots.shift() // removes first element
console.log(pilots)

pilots.unshift('Hamilton') // add first element
console.log(pilots)
console.log()

// splice add and removes
// add
pilots.splice(2, 0, 'Botas', 'Massa')
console.log(pilots)
//revome
pilots.splice(3,1)
console.log(pilots)
console.log()

const somePilots1 = pilots.slice(2)
console.log(somePilots1) // new array

const somePilots2 = pilots.slice(1,4) // does no include index 4
console.log(somePilots2)