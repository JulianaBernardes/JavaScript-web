let double = function(a) {
    return 2 * a
}

double = (a) => {
    return 2 * a
}

double = a => 2 * a // implicit return
console.log(double(Math.PI))


let helo = function () {
    return 'Hello!'
}
hello = () => 'Hello!'
hello = _ => 'Hello!' //has parameter
console.log(hello())
