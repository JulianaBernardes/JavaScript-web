function getRandomInteger (min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getRandomInteger(-1, 10)
    console.log(`Random number: ${option}`)
} while(option != -1)

console.log('See you!')