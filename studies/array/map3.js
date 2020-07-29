Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const cart = [
    '{ "name": "Eraser", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "Pensil", "price": 41.22 }',
    '{ "name": "Pen", "price": 7.50 }'
]

// Return array with prices

 let toObject = json => JSON.parse(json)
 const onlyPrice = product => product.price

 const result = cart.map2(toObject).map2(onlyPrice)
 console.log(result)