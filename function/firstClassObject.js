// Function in JS is First-Class Object (citzens)
// Hightr-orger function

//Literal
function fun1(){

}
//store variable
const fun2 = function() {}

//store in array
const array = [function (a, b) {
    return a + b}
    , fun1, fun2]
console.log(array[0] (2,3))

//store in an object attribute

const obj = {}
obj.talk = function () {return 'Hey'}
console.log(obj.talk())

//function as a parameter
function run(fun) {
    fun()
}

run(function () { console.log('Execute...')})

// A function can return/ contain another function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(4)
const fivePlus = sum(2, 3)
fivePlus(4)