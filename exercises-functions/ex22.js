function calculateTax (month, annuity) {
    let amount = annuity * (1 + 0.05) ** (month - 1)
    console.log(amount)
}
calculateTax(3 , 200)