function talkAfter(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

talkAfter(3, 'Very cool!')
    .then(phrase => phrase.concat('?!?!'))
    .then(anotherPhrase => console.log(anotherPhrase))
    .catch(e => console.log(e))