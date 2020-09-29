// Object literal
const obj1 = {} // literal notation
console.log(obj1)

// Object in JS with new operator
console.log(typeof Object)
console.log(typeof new Object)

const obj2 = new Object
console.log(obj2)

// constructor function 
function Product (name, price, discount) {
    this.name = name
    this.getDiscountPrice = () => {
        return price * (1 - discount)
    }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.99, 0.25)
console.log(p1.getDiscountPrice(), p2.getDiscountPrice())

// Factory function
function createEmployer(name, baseSalary, abstence) {
    return {
        name,
        baseSalary,
        abstence,
        getSalary() {
            return (baseSalary / 30) * (30 - abstence)
        }
    }
}
const f1= createEmployer('Junior', 7980, 4)
const f2 = createEmployer('Maria', 7800, 1)
console.log(f1.getSalary(), f2.getSalary())

// Object.create

const child = Object.create(null)
child.name = 'Ana'
console.log(child)

const fromJSON = JSON.parse('{"info": "Im a JSON"}')
console.log(fromJSON.info)