let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)


isActive = 1
console.log(isActive) // 1
console.log(!!isActive) //true

console.log(!true) //false
console.log(!!true) //true
console.log(!false) //true
console.log(!!false) //false

console.log('the trues...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('the falses...')
console.log(!!0)
console.log(!!'') //to check empty string
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('to finish...')
console.log(('' || null || 0 || 'Print first true.'))
console.log(!!('' || null || 0 || 'I am true!'))

let name = ''
console.log(name || 'Unknown')


