function People(name) {
    this.name = name

    this.speak = function () {
        console.log(`My name is ${this.name}.`)
    }
}
const p1 = new People('Clarke')
p1.speak()
console.log(p1.name)


