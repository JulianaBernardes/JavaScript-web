const vector = [1, 2, 3, 4, 5, 6]

const even = vector => vector % 2 == 0
const odd = vector => vector % 2 != 0

const evenNumbers = vector.filter(even)
console.log(`The even numbers are : ${evenNumbers}`)

const oddNumbers = vector.filter(odd)
console.log(`The odd numbers are : ${oddNumbers}`)
