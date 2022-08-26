const firstName = 'Sérgio'
const lastName = 'Sanchez'

const name = firstName + ' ' + lastName
const age = 32

console.log(name)
console.log(age)

// Concatenação de string e number
console.log(name + age)

// Concatenação
console.log('Eu, ' + name + ' tenho ' + age + ' anos')

// Template string
console.log(`Eu, ${name} tenho ${age} anos e ${1 + 3} meses`)

// Lista ou array ou vetor multidimensional ou matriz
const guests = (['João', 'Maria', 'Pedro', [name, age]])
console.log(guests)
console.log(guests[1])

// Definição / Declaração de variável
let x
// Atribuição de valor
x = 10
console.log(x)
x = 20
console.log(x)

// Acessando dados dentro de listas multidimensionais
const guests2 = [
  ['João', true],
  ['Maria', false]
]

console.log(guests2)
console.log(guests2[0][0])

// Atribuindo um valor de uma lista a uma nova variável
const guestJoao = guests2[0]
console.log(guestJoao)