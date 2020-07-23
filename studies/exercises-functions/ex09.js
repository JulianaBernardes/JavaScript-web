function roundGrades (grade) {
    if (grade < 38) {
        console.log(`THe student failed. Grade = ${grade}`)
    } else if ((grade % 5) <= 3) {
        let roundGradeUp = grade + (5 - (grade % 5))
        console.log(`The student passed. Grade = ${roundGradeUp}`)
    }
}
roundGrades(98)