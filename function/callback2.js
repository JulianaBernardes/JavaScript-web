const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Without callback
const lowScores1 = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowScores1.push(grades[i])
    }
}

console.log(lowScores1)

// With Callback

lowScores2 = grades.filter(function (grades) {
    return grades < 7
})
console.log(lowScores2)
 
const lowScores3 = grades.filter(grades=> grades < 7)
console.log(lowScores3)

const gradesLowerThan7 = grades => grades < 7
const lowScores4 = grades.filter(gradesLowerThan7)
console.log(lowScores4)