const vector = [1, 5, 10, 15, 20, 30, 40]
let negative = 0

for (let i = 0; i < vector.length; i++) {
    if (vector[i] >= 10 && vector[i] <= 20) {
        inside++
    } else {
        outside++
    }
}
console.log(inside)
console.log(outside)