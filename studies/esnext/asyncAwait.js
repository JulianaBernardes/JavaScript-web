const http = require('http')

const getClasses = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', data => {
                result += data
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let takeStudents = async () => {
    const classA = await getClasses('A')
    const classB = await getClasses('B')
    const classC = await getClasses('C')
    return [].concat(classA, classB, classC)
} // returns object AsyncFunction

takeStudents()
    .then(students => students.map(a => a.nome))
    .then(names => console.log(names))