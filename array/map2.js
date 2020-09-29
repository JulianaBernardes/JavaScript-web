const cart = [
    '{ "name": "Eraser", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "Pensil", "price": 41.22 }',
    '{ "name": "Pen", "price": 7.50 }'
]

// Return array with prices

 let toObject = json => JSON.parse(json)
 const onlyPrice = product => product.price

 const result = cart.map(toObject).map(onlyPrice)
 console.log(result)
 