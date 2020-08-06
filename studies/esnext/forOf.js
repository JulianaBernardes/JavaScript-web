for (let letter of "Coder") {
    console.log(letter)
}
console.log()

const EcmaSubjects = ['Map', 'Set', 'Promise']

for (let i in EcmaSubjects) {
    console.log(i)
}
console.log()

for (let subject of EcmaSubjects) {
    console.log(subject)
}
console.log()

const mapSubjects = new Map([
    ['Map', { addressed: true }],
    ['Set', { addressed: true }],
    ['Promise', { addressed: false }]
])

for (let subject of mapSubjects) {
    console.log(subject)
}
console.log()

for (let key of mapSubjects.keys()) {
    console.log(key)
}
console.log()

for (let value of mapSubjects.values()) {
    console.log(value)
}
console.log()

for (let [ch, vl] of mapSubjects.entries()) {
    console.log(ch, vl)
}
console.log()

const s = new Set(['a', 'b', 'c'])
for (let letter of s) {
    console.log(letter)
}