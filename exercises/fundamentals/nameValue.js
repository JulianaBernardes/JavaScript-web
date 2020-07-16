const hail = 'Hey' // lexical context 1

function exec() {
    const hail = 'Hello' //lexical context 2
    return hail
}

//Objects are containers for named values called properties or methods.

const client = {
    name: 'Pedro',
    age: 32,
    weight: 90,
    adress: {
        street: 'Hollies',
        number: 123
    }

}
console.log(hail)
console.log(exec())
console.log(client)
console.log(client.adress)
