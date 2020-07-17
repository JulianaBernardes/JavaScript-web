function treatError(error){
    //throw new Error('...')
    //throw 10
    //throw true
    // throw 'message'
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    }

}

function printName(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        treatError(e)
    } finally {
        console.log('final')
    }
}

const obj = { namee: 'Robert'}
printName(obj)