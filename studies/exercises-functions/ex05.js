function switchToCurrency(num) {
    let numFixed = num.toFixed(2).replace(/\./g, ',')

    console.log(`€${numFixed}`)
}
switchToCurrency(2.3112)