// tagged templates - process template string inside a function
function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return 'Another string'
}

const student = 'Junior'
const situation = 'Approved'
console.log(tag `${student} is ${situation}`)