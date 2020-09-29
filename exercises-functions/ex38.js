function oddNumbers (start, end) {

    if (start > end) {
        let aux = start
        start = end
        end = aux    
    }
    
    for(let i = start; i <= end; i++) {

        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

oddNumbers(6,1)