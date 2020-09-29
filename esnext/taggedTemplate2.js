
function real(parts, ...values) {
    const result = []
    values.forEach((value, index) => {
        value = isNaN(value) ? value : `R$${value.toFixed(2)}`
        result.push(parts[index], value)
    })
    return result.join('')
}
const price = 29.9
const installmentPrice = 11
console.log(real `1x ${price} or 3x ${installmentPrice}`)