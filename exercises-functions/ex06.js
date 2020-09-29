function simpleInterest (capital, rate, time) {
    let interest = capital * rate * time
    console.log(`The balance is € ${(capital + interest).toFixed(2)}`)
}
simpleInterest(110, 0.01, 12)

function compoundInterest (capital, rate, time) {
    let balance = capital*(1 + rate)**time  

    console.log(`Your balance is € ${balance.toFixed(2)}`)

}
compoundInterest (300, 0.01, 12)