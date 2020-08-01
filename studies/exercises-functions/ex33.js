const integerVector = [1, 2, 3, 4]
const stringVector = ['One', 'Two', 'Three', 'Four']
const doubleVector = [1.1, 2.2, 3.3, 4.4]

const all = integerVector.concat(stringVector, doubleVector)
console.log(all)
console.log()

console.log(integerVector.concat(stringVector, doubleVector))
console.log()

console.log([].concat([1, 2, 3, 4],['One', 'Two', 'Three', 'Four'],[1.1, 2.2, 3.3, 4.4]))

