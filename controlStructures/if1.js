function goodNews(grade) {
    if(grade >=7){
        console.log('Approved, grade: ' + grade)
    }
}

goodNews(8.1)
goodNews(6.1)

function ifItsTrueISay(value) {
    if(value) {
        console.log('É verdade... ' + value )
    }
}
ifItsTrueISay()
ifItsTrueISay(null)
ifItsTrueISay(undefined)
ifItsTrueISay(NaN)
ifItsTrueISay('')
ifItsTrueISay(0)
ifItsTrueISay(-1)
ifItsTrueISay(' ')
ifItsTrueISay('?')
ifItsTrueISay([])
ifItsTrueISay([1,2])
ifItsTrueISay({})