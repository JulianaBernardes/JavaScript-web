const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
approved.forEach(function(name, index, array) {
    console.log(`${index + 1}) ${name}`)
    console.log(array)    
})
console.log()

approved.forEach(name => console.log(name))
console.log()

const showApproved = (approved) => console.log(approved)
approved.forEach(showApproved)