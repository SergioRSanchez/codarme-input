console.log('-----Demonstração de escopo só ser executado quando invoca a função-----')
let x = 10
function soma() {
  x = 20
  const resultado = 50
}
console.log(x)
soma()
console.log(x)


console.log('-----Retornando uma função dentro de uma variável-----')
function result() {
  return 10 + 15
}
const number = result()
console.log(number)


console.log('-----Usando Parâmetros-----')
function result2(n1, n2) {
  return n1 + n2
}
const number2 = result2(15, 20)
console.log(number2)

console.log(result2(15, 25))
console.log(result2(30, 40))

console.log(number2 + result2(2, 3))


console.log('-----Demonstrando atribuição de valores de funções e variáveis-----')
function teste() {
  console.log('Função Executada')
}
const teste2 = teste
teste()
teste2()


console.log('-----Calcuradora-----')
function soma(n1, n2) {
  return n1 + n2
}

function subtracao(n1, n2) {
  return n1 - n2
}

function calc(operacao) {
  const result = operacao(5, 5)
  console.log(result)
}
calc(subtracao)
console.log('Nesse caso, "operação" apontou para o espaço na memória em que está a função de "subtração"')


console.log('-----Assincronismo e callback-----')
function callback() {
  console.log('MEIO')
}

console.log('Inicio')

setTimeout(callback, 2000)

console.log('Fim')


console.log('-----Hoisting-----')

hoisting()
function hoisting() {
  console.log('Exemplo de Hoisting')
}


console.log('-----Declarações de Funções-----')
//  function declaration - sofre hoisting
function multiplicacao(n1, n2) {
  return n1 * n2
}

//  function expression -> anonima
const division = function (n1, n2) {
  return n1 / n2
}

// Arrow function
const soma2 = (n1, n2) => n1 + n2
console.log(soma2(1, 2))


/*
Internamente o JS trabalha a seguinte função:

function soma(n1, n2) {
  return n1 + n2
}

da seguinte maneira:

const soma = Function(['n1', 'n2'], 'return n1 + n2')

se executássemos console.log(soma(1,2)) seria retornado 3
*/

const soma4 = Function(['n1', 'n2'], 'return n1 + n2')
console.log(soma4(2, 2))
soma4.add = function () {
  console.log('propriedade adicionada na função')
}
soma4.add()