function verifyLeapYear (year) {
    if (year % 400 == 0 ) {
        console.log('True')
    } else if (year % 100 == 0) {
        console.log('False')
    } else if (year % 4 == 0) {
        console.log('True')
    } else {
        console.log('False')
    }
}

verifyLeapYear(2000)
verifyLeapYear(2300)
verifyLeapYear(2400)
verifyLeapYear(2003)
verifyLeapYear(2004)