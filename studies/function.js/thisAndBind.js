const people = {
    hail: 'Good morning!',
    talk() {
        console.log(this.hail)
    }
}

people.talk()
const talk = people.talk
talk() // conflict between paradigms: functional and OO

const peopleTalking = people.talk.bind(people)
peopleTalking()