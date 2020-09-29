const technologies = new Map()
technologies.set('react', {framework: false})
technologies.set('Angular', {framework: true})

console.log(technologies.react)
console.log(technologies.get('react').framework)
console.log()
const randomKeys = new Map([
    [function () {}, 'Function'],
    [{}, 'Object'],
    [123, 'Number']
])

randomKeys.forEach((value, key) => {
    console.log(key, value)
})
console.log()

console.log(randomKeys.has(123))
randomKeys.delete(123)
console.log(randomKeys.has(123))
console.log(randomKeys.size)
console.log()

randomKeys.set(123, 'a')
randomKeys.set(123, 'b')
randomKeys.set(456, 'b')
console.log(randomKeys)
