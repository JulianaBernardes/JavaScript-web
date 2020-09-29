const product = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Glass cup', price: 12.49, fragile: true},
    {name: 'Plastic cup', price: 18.99, fragile: false}
]

console.log(product.filter(function(p) {
    return p.price > 2400    
}))

console.log(product.filter(function(p) {    
    return false
}))
console.log()

const expensive = product => product.price >= 500
const fragile = product => product.fragile // = true

const result = product.filter(expensive).filter(fragile)
console.log(result)


