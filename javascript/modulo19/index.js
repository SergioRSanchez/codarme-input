console.log('----- Rest Params -----')
function sum(...nums) {
  console.log(nums)
  return nums.reduce((acc, num) => acc + num)
}
console.log(sum(1, 1, 1, 1, 1, 'asds', true))  // observe que podemos passar qualquer valor


console.log('----- Spread Operator -----')
const listaSpread = [1, 2, 3, 4]
console.log(sum(listaSpread))
console.log(sum(listaSpread[0], listaSpread[1]))


console.log('----- Destructuring Assignment -----')
const listaDestructuring = [1, 2, 3, 4, 5]
const item1 = listaDestructuring.shift()  //  Retiramos o primeiro item da lista e inserimos na variável
console.log(listaDestructuring, item1)

const [item, ...listaDestructuring2] = [1, 2, 3, 4, 5]  //  Utilizamos o Destructuring Assignment
console.log(listaDestructuring2, item)

const person = {
  name: 'Sergio',
  age: 32,
  company: 'Sanchez'
}
// const name = person.name
// const age = person.age
// console.log(name, age)  //  Maneira que havíamos visto anteriormente

const { name, age } = person  //  Utilizando Destructuring Assignment
console.log(name, age)


//  Ou fazemos direto no objeto
const { age2, ...others } = {
  name2: 'Sergio Roberto',
  age2: 32,
  company2: 'Sanchez Filho'
}
console.log(age2, others)


console.log('----- Juntando Tudo -----')
const person2 = {
  name5: 'sergio',
  age: 32,
}

const { name5, ...company } = {  // separamos para o name5 ficar em uma variável, e o restante ficar em ...company
  name5: 'x',
  company: 'Sanchez',
  city: 'São José do Rio Preto',
}


function showGuest({ name5, ...person }) {
  console.log(name5, person)
}
showGuest({
  ...person2,
  ...company,  // como separamos o name5 da variável, iremos usar o restante
})
