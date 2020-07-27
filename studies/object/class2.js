class Grandfather {
    constructor(surname) {
        this.surname = surname
    }
}

class Father extends Grandfather {
    constructor(surname, profession = 'Teacher') {
        super(surname)
        this.profession = profession
    }
}

class Son extends Father {
    constructor() {
        super('Silva')
    }
}

const son = new Son
console.log(son)