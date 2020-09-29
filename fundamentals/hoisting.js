//var a
console.log('a =', a)
//a = 2
var a = 2
console.log('a =', a)
console.log()

function test() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
test()
console.log()

//console.log('b =',b) //Error
let b = 2
console.log('b =',b)