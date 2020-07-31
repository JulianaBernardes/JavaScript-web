const school = [{
    name: 'Class M1',
    students: [{
        name: 'Gustavo',
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: 'Class M2',
    students: [{
        name: 'Rebecca',
        grade: 8.9
    }, {
        name: 'Roberto',
        grade: 7.3
    }]
}]

const getStudentGrade = student => student.grade
const getClassesGrade = classes => classes.students.map(getStudentGrade)

const grades1 = school.map(getClassesGrade)
console.log(grades1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))
console.log()

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const grades2 = school.flatMap(getClassesGrade)
console.log(grades2)