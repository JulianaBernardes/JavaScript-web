const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = e => e.pais === 'China'
const woman = e => e.genero === 'F'
const lowestSalary = (employee, currentEmployee) => {
    return employee.salario > currentEmployee.salario ? employee : currentEmployee
}

axios.get(url).then(response => {
    const employeer = response.data
    //console.log(employeer)

    const worker = employeer
    .filter(chineses)
    .filter(woman)
    .reduce(lowestSalary)

    console.log(worker)
})

