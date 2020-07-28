console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Bia', 'Carlos', 'Ana')
console.log(approved)

approved = ['Bia', 'Carlos', 'Ana']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved[3] = 'Paulo'
approved.push('Junior')
console.log(approved.length)

approved[9] = 'Chris'
console.log(approved.length)
console.log(approved[8] === undefined)
console.log()

console.log(approved)
approved.sort() // changes the original array
console.log(approved)

delete approved[1]
console.log(approved[1])
console.log(approved[2])
console.log()

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 0, 'Element1', 'Element2')
console.log(approved)

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 1, 'Element1', 'Element2')
console.log(approved)