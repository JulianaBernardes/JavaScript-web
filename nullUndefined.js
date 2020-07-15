let value //uninitialized - undefined
console.log(value)
//console.log(value2) //Error, not defined
console.log()

value = null // absence of value, empty variable... does not point to any place in memory
console.log(value)
//console.log(value.toString()) // Error!
console.log()

const product = {}
console.log(product.price)
//console.log(product.price.a) // error
console.log(product)
console.log()

product.price = 3.50
console.log(product)
console.log()

product.price = undefined // avoid assigning undefined
console.log(!!product.price)
// delete product.price // delete atribute
console.log(product)
console.log()

product.price = null // whithout price
console.log(!!product.price)
console.log(product)
