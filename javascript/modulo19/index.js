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


console.log('----- Default Params -----')
function sum(n1, n2 = 20) {  // Caso não passemos nenhum valor para n2, seu valor será 20
  console.log(n1 + n2)
}
sum(10, 10)
sum(10)

function guest(person = { name: 'Não tem' }) {
  console.log(person.name)
}
guest()
guest({ name: 'Sergio' })


console.log('----- Funções como propriedades de Objetos -----')
//  Maneira padrão, definindo a função como propriedade do objeto
const person3 = {
  getAge: function () {
    console.log(33)
  }
}
person3.getAge()

//  Definindo a função fora da variável, e usando como propriedade do objeto
function getAge2() {
  console.log(34)
}
const person4 = {
  // getAge2: getAge2
  getAge2  //  Nesse caso, o valor da chave é igual o valor da referência, por isso usamos só getAge
}
person4.getAge2()

//  Definindo direto como uma função
const person5 = {
  getAge3() {
    console.log(35)
  }
}
person5.getAge3()


console.log('----- Persistência de Dados -----')
// window.localStorage.setItem('teste', '0001')  // Mesmo comentando esse código, ele irá se manter na memória da nossa url
const item2 = window.localStorage.getItem('teste')
console.log(item2)
