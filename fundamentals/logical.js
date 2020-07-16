function shopping(job1, job2) {
    const buyIceCream = job1 || job2
    const buyTv50 = job1 && job2
    //const buyTv32 = !!(job1 ^ job2) // bitwise xor
    const buyTv32 = job1 != job2
    keepHealthy = !buyIceCream //unary operator

    return {buyIceCream, buyTv50, buyTv32, keepHealthy} //create object
}
console.log(shopping(true,true))
console.log(shopping(true,false))
console.log(shopping(false,true))
console.log(shopping(false,false))