function generateNumbersBetween(min, max, repeatedNumbers) {
    if (min > max) { [max, min] = [min, max] }

    return new Promise((resolve, reject) => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        if (repeatedNumbers.includes(random)) {
            reject('Repeated number!')
        } else {
            resolve(random)
        }
    })
}

async function generateLottery(numbersQuantity, attempt = 1) {
    try {
        const numbers = []
        for (let _ of Array(numbersQuantity).fill()) {
            numbers.push(await generateNumbersBetween(1, 60, numbers))
        }

        return numbers
    } catch (e) {
        if(attempt > 10) {
            throw "Dit not work!"
        } else {
            return generateLottery(numbersQuantity, attempt + 1)
        }
    }
}

generateLottery(8)
    .then(console.log)
    .catch(console.log)