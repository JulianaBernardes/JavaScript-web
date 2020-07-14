const school = "Coder"

console.log(school.charAt(4))
console.log(school.charAt(5))
console.log(school.charAt(0))
console.log(school.charCodeAt(3)) //unicode table
console.log(school.indexOf('o'))

console.log(school.substring(1))
console.log(school.substring(0, 3)) // Index 0 more 3 characters

console.log('School '.concat(school).concat("!"))
console.log('School ' + school + "!")

console.log(school.replace('e', 3))
console.log(school.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //generates array
console.log('Ana,Maria.Pedro'.split(/./))