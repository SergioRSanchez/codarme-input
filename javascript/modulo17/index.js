console.log('----- forEach - Iterando nosso array -----')

const guest = [
  { name: 'João', age: 32, confirmed: true },
  { name: 'Maria', age: 36, confirmed: false },
  { name: 'Lucas', age: 24, confirmed: true },
  { name: 'Ana', age: 18, confirmed: false },
  { name: 'Julia', age: 8, confirmed: true },
]

function callback(guest) {
  if (guest.confirmed) {
    console.log(`${guest.name} confirmou presença`)
  } else {
    console.log(`${guest.name} não poderá comparecer`)
  }
}

guest.forEach(callback)



console.log('----- for -----')

/* primeiro é definição da variável, segundo é o critério de parada,
terceiro é o implemento (no lugar de i=i+1 podemos usar i++) */
for (let i = 0; i < 6; i = i + 1) {
  console.log(i)
}
// fazendo com a lista de guest:
for (let i = 0; i < 6; i = i + 1) {
  console.log(guest[i])
}
/* repare que o último deu undefined, pois o critério de parada foi i = 5, ou seja, 6 objetos, e na lista temos 5 objetos
para evitar isso usamos o número de objetos que temos na lista, usando o length */
for (let i = 0; i < guest.length; i = i + 1) {
  console.log(guest[i])
}


console.log('----- Definindo callbacks -----')

console.log('Function dentro do callback')
console.log('| | |')
console.log('v v v')

guest.forEach(function (guest) {
  console.log(guest)
})

console.log('Arrow Function dentro do callback')
console.log('| | |')
console.log('v v v')

guest.forEach(guest => console.log(guest))


console.log('----- Lista baseada em outra lista -----')

/* imagina que queremos criar uma lista baseada naquela primeira, mas nessa queremos somente quem confirmou presença */
let confirmedGuests = []

guest.forEach(item => {
  if (item.confirmed) {
    confirmedGuests.push(item)
  }
})
console.log(confirmedGuests)
