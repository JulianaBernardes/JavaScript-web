Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {

        if(callback(this[i], i, thi)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const product = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Glass cup', price: 12.49, fragile: true},
    {name: 'Plastic cup', price: 18.99, fragile: false}
]

const expensive = product => product.price >= 500
const fragile = product => product.fragile // = true

const result = product.filter2(expensive).filter2(fragile)
console.log(result)