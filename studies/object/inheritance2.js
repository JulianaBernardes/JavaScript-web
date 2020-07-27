// Prototype chain
Object.prototype.attr0 = 'Z' // avoid it
const grandfather = {attr1: 'A'}
const father = {__proto__: grandfather, attr2: 'B', attr3: '3'}
const son = {__proto__: father, attr3: 'C'}
console.log(son.attr0, son.attr1, son.attr2, son.attr3)
console.log()

const car = {
    currentSpeed: 0,
    maxVel: 200,
    speedUp (delta) {
        if (this.currentSpeed + delta <= this.maxVel) {
            this.currentSpeed += delta
        } else {
            this.currentSpeed = this.maxVel
        }
    },
    status() {

        return `${this.currentSpeed} km/h. Max velocity: ${this.maxVel} km/h.`
    }    
}

const ferrari = {
    model: 'F40',
    maxVel: 324 // shadowing
}

const volvo = {
    model: 'V40',
    status() {
        return `Model ${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)
console.log()

volvo.speedUp(210)
console.log(volvo.status())

ferrari.speedUp(300)
console.log(ferrari.status())
