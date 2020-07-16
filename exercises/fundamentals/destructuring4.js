function rand([min = 0, max = 1000]) { // 
    if (min > max) [min, max] = [max, min] 
    /*1-first destructuring than create an array
    * 2-When we use destructuring we receive 2 attributes
    */

    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([])) // 0 - 1000
//console.log(rand()) // Can´t read properties of undefined