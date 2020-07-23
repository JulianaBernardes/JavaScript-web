let car = 'pickup'
switch (car) {
    case 'hatch':
        console.log('Sucessful purchase')
        break;
    case 'motorcycle': case 'pickup': case 'sedan':
        console.log('Are you sure you prefer this model?')
        break;
    default:
        console.log('Model not available')       
}