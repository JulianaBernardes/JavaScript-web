const printResult = function(grade) {
    if(grade >=7) {
        console.log('Approved!')        
    } else{
        console.log('Reproved!')
    }
}
printResult(10)
printResult(4)
printResult('Hey!') //care!