// let and const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Template String
const product = 'iPad'
console.log(`${product} is
 expensive`)

 //Destructuring
 const [l, e, ...tters] = "Coder"
 console.log(l, e, tters)

 const [x, , y] = [1, 2, 3]
 console.log(x,y)

 const {age: i, name} = {name: 'Ana', age: 9}
 console.log(i, name)

