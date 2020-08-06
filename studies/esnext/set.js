const teams = new Set()
teams.add('Barcelona')
teams.add('Porto').add('Real Madrid').add('PSG')
teams.add('Juventus')
teams.add('Barcelona')

console.log(teams)
console.log(teams.size)
console.log(teams.has('barcelona'))
console.log(teams.has('Barcelona'))
teams.delete('PSG')
console.log(teams.has('PSG'))

const names = ['Juliana', 'Lucas', 'Junior', 'Lucas']
const namesSet = new Set(names)
console.log(namesSet)
