//no return
function printSum(a, b) {
    console.log(a + b)
}
printSum(2,3)
printSum(2)
printSum(2, 10, 4, 5, 6, 7, 8)
printSum()
console.log()

// return
function sum(a, b = 1) {
    return a + b
}

console.log(sum(10,20))
console.log(sum(2))
console.log(sum())