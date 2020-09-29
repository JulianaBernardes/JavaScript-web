
const product = new Object
product.name = 'Chair'
product['product brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']
console.log(product)

const car = {
    model: 'A4',
    price: 8900,
    owner: {
        name: 'Paulo',
        age: 25,
        adress: {
            street: 'ABC',
            number: 123
        }
    },
    conductors: [{
        name: 'Junior',
        age: 19
    }, {
        name: 'Juliana',
        age: 24
    }],
        calculateInsuranceValue: function () {
            //...
        }
}

car.owner.adress.number = 1000
car['owner']['adress']['street'] = 'Av New York'
console.log(car)
console.log()

//delete car.conductors
delete car.owner.adress
delete car.calculateInsuranceValue
console.log(car)
console.log(car.conductors)
console.log(car.conductors.length)