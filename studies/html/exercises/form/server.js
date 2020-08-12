const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({extended: true}))

app.post('/users', (req, resp) => {
    console.log(req.body)
    //console.log(req.query) // get
    resp.send('<h1>Congratulations. User included!</h>')
})

app.post('/users/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Congratulations. User changed!</h>')
})

app.listen(3003)