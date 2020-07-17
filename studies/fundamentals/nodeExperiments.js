let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'test'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log()

console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//creating crazy variable without var or let
abc = 3 // dont do that
console.log(global.abc)
//module.exports = {e: 456, f: false, g: 'test'}

