class People {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`My name is ${this.name}.`)
    }    
}
const p1 = new People('John')
p1.speak()

const createPeople = name => {
    return {
        speak: () => console.log(`My name is ${name}.`)
    }
}
const p2 = createPeople('John')
p2.speak()