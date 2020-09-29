function multi(numbersVector, integerNumber) {
    let newVector = []

    for (let i = 0; i < numbersVector.length; i++) {
        newVector[i] = numbersVector[i] * integerNumber
    }
    console.log(newVector)
}
multi([2, 3, 4], 2)

function multi2(nums, integerNums) {

    let result = nums.map(function (e) {
        return e * integerNums
    })

    console.log(result)
}
multi2([3, 5, 8], 3)

function multi3(nums, integerNums) {

    let result = nums.map(function (e) {
        if (e > 5) {
            return e * integerNums
        } else {
            return e
        }

    })

    console.log(result)
}
multi3([3, 5, 8], 3)



