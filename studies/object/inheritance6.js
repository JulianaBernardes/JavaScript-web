function Lesson(name, videoID) {
    this.name = name
    this.videoID = videoID
}

const lesson1 = new Lesson('Welcome', 123)
const lesson2 = new Lesson('See you later', 456)
console.log(lesson1, lesson2)
console.log()

// simulating the new operator
function new1 (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const lesson3 = new1(Lesson, 'Welcome', 123)
const lesson4 = new1(Lesson, 'See you later', 456)
console.log(lesson3, lesson4)