const ferrari = {
    model: 'F40',
    maxVel: 324
}

const volvo = {
    model: ' V40',
    maxVel: 200
}

console.log(ferrari.prototype) // prototype is present in functions. ferrari is object
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__  === null)
console.log()

function MyObject() {}
    console.log(typeof Object, typeof myObject)
    console.log(Object.prototype)
    console.log(MyObject.prototype)
