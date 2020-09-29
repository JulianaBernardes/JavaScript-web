const vector = [-5, -10, -15, 20, 30, 40]
let sum = 0

for (let i = 0; i < vector.length; i++) {
    sum += vector[i]
}
let average = sum / vector.length
console.log(average)