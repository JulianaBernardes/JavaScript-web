function workOrNot (value, errorChance) {
    return new Promise((resolve,reject) => {
        try {
            con.log('temp') // error
        if(Math.random() < errorChance) {
            reject('An error has occurred')
        } else {
            resolve(value)
        }             
        } catch(e) {
            reject(e)
        }        
    })
}

workOrNot('Testing...', 0.5)
    .then(v => `Value: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Specific error: ${err}`)
        )
    .then(() => console.log('Almost end!'))
    .catch(err => console.log(`General error: ${err}`))
    .then(() => console.log('End!'))