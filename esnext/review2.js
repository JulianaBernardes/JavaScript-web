//Arrow function
const sum = (a,b) => a + b
console.log(sum(2, 3))

// Arrow function
const lexical1 = () => console.log(this === exports)
const lexical2 = lexical1.bind({})
lexical1()
lexical2()

//Default parameters
function log(text = 'Node') {
    console.log(text)
}
log()
log('Stronger')

// rest operator
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))