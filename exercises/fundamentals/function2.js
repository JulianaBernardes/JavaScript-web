// storing a function in a variable
const printSum = function(a, b){
    console.log(a + b)
}

printSum(2, 3)
console.log()

// storing arrow function
const sum = (a,b) => {
    return a + b
}

console.log(sum(2,3))

// Implicit return

const subtraction = (a,b) => a - b
console.log(subtraction(2,3))
console.log()

const subtraction2 = a => 2*a
console.log(subtraction2(4))

const print2 = a => console.log(a)
print2('Cool!!!')