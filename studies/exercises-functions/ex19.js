function calculatePrice(code, amount) {
    let price
    switch (code) {
        case 100:
            price = amount * 3
            console.log(`Total: € ${price.toFixed(2)}`)
            break;
        case 200:
            price = amount * 4
            console.log(`Total: € ${price.toFixed(2)}`)
            break;
        case 300:
            price = amount * 5.5
            console.log(`Total: € ${price.toFixed(2)}`)
            break;
        case 400:
            price = amount * 7.5
            console.log(`Total: € ${price.toFixed(2)}`)
            break;
        case 500:
            price = amount * 3.5
            console.log(`Total: € ${price.toFixed(2)}`)
            break;
        case 600:
            price = amount * 2.8
            console.log(`Total: € ${price.toFixed(2)}`)
            break;
        default:
            console.log(`This product doesn't exist.`)
            break;
    }
}
calculatePrice(300, 5)
calculatePrice(500, 2)
calculatePrice(0, 5)



