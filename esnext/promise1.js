const firstElement = arrayOrString => arrayOrString[0]
const lowerCaseLetter = letter => letter.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Junior'])
})
    .then(firstElement)
    .then(firstElement)
    .then(lowerCaseLetter)
    .then(console.log)
