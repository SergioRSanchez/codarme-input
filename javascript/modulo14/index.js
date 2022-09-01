const firstName = 'Sérgio'
const lastName = 'Sanchez'

const name = firstName + ' ' + lastName
const age = 32

console.log(name)
console.log(age)

// Concatenação de string e number
console.log(name + age)


// Concatenação
console.log('-')
console.log('-----Concatenação-----')

console.log('Eu, ' + name + ' tenho ' + age + ' anos')


// Template string
console.log('-')
console.log('-----Template String-----')

console.log(`Eu, ${name} tenho ${age} anos e ${1 + 3} meses`)


// Lista ou array ou vetor multidimensional ou matriz
console.log('-')
console.log('-----Array-----')

const guests = (['João', 'Maria', 'Pedro', [name, age]])
console.log(guests)
console.log(guests[1])


// Definição / Declaração de variável
console.log('-')
console.log('-----Let-----')

let x
// Atribuição de valor
x = 10
console.log(x)
x = 20
console.log(x)


// Acessando dados dentro de listas multidimensionais
console.log('-')
console.log('-----Acessando dados dentro de listas-----')

const guests2 = [
  ['João', true],
  ['Maria', false]
]

console.log(guests2)
console.log(guests2[0][0])


// Atribuindo um valor de uma lista a uma nova variável
console.log('-')
console.log('-----Atribuindo um valor de uma lista à uma variável-----')

const guestJoao = guests2[0]
console.log(guestJoao)


// Objeto
console.log('-')
console.log('-----Objeto-----')

const guest3 = {
  name: 'Jão',
  confirmed: true,
  age: 30,
}
const guest4 = {
  name: 'Maria',
  confirmed: false,
  age: 31,
}
console.log(guest3)
console.log(guest4)


// Acessando propriedades de um objeto
console.log('-')
console.log('-----Acessando propriedades de objetos-----')

console.log(guest3.name)
console.log(guest3['name'])


// Objetos dentro de lista
console.log('-')
console.log('-----Objeto dentro de Lista-----')

const guestList = [
  guest3,
  guest4,
  {
    name: 'Steve',
    confirmed: true,
    age: 38,
  }
]

console.log(guestList)
console.log(guestList[0].name)


// Objetos dentro de objeto
console.log('-')
console.log('-----Objeto dentro de objeto-----')

const obj = {
  name: 'Sergio',
  company: {
    name: 'Freela',
  }
}

console.log(obj.company.name)


// Adicionando propriedades ao objeto
console.log('-')
console.log('-----Adicionando propriedades ao objeto-----')

const person = { name: 'Sergio' }
console.log(person)

person.age = 32
console.log(person)

person.outra = {}
console.log(person)

person.outra.qualquer = 10
console.log(person)