const students = [
    { name: 'John', grade: 7.3, scholarship: false },
    { name: 'Maria', grade: 9.2, scholarship: true },
    { name: 'Pedro', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
]

// are all students scholarship holders?
const allScholarship = (result, scholarship) => result && scholarship
console.log(students.map(a => a.scholarship).reduce(allScholarship))

//are any students scholarship holders?
const someScholarship = (result, scholarship) => result || scholarship
console.log(students.map(a => a.scholarship).reduce(someScholarship))