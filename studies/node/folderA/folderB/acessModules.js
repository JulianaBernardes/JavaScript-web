const moduleA = require('../../moduleA')

console.log(moduleA.hello)

const c = require('./folderC')
console.log(c.hello2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Good morning!!!')
//     res.end()
// }).listen(8080)