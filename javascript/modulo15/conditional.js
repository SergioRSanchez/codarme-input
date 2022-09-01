console.log('-----If e Else normal-----')

let lightIsGreen = false
const lightIsYellow = true

if (lightIsGreen) {
  console.log('O semáforo está VERDE, passe')
} else if (lightIsYellow) {
  console.log('O semáforo está AMARELO, atenção')
} else {
  console.log('O semáforo está VERMELHO, pare')
}


console.log('-----If ternário-----')

lightIsGreen = true
lightIsGreen ? console.log('semáforo VERDE') : console.log('PARE')


console.log('-----If ternário dentro de uma variável-----')
let x = true ? 10 : 20
console.log(x)
x = false ? 10 : 20
console.log(x)


console.log('-----Switch / Case-----')
const semaforo = 'preto'

switch (semaforo) {
  case 'vermelho': console.log('Semáforo VERMELHO')
    break
  case 'amarelo': console.log('Semáforo AMARELO')
    break
  case 'verde': console.log('Semáforo VERDE')
    break
  default: console.log('Semáforo DESLIGADO')
}


console.log('-----Operadores de Comparação-----')
console.log(33 == '33')  //compara os valores
console.log(33 === '33')  //compara os tipos
console.log(33 > 32)  //maior que
console.log(33 >= 33)  //maior ou igual
console.log(33 < 32)  //menor que
console.log(33 <= 33)  //menor ou igual
console.log(33 != '33')  //diferente sem comparar o tipo
console.log(33 !== 33)  //diferente comparando o tipo também


console.log('-----Operadores Lógicos-----')
//  AND  &&
const person = {
  name: 'Maria',
  age: 17,
  guest: true
}
const mariaPodeEntrar = person.guest === true && person.age >= 18
if (mariaPodeEntrar) {
  console.log('Bem vindo')
} else {
  console.log('Entrada Proibida')
}

// OR  ||
const person2 = {
  name: 'Jão',
  child: true,
  guest: false
}
if (person2.guest === true || person2.child === true) {
  console.log('Bem vindo')
} else {
  console.log('Entrada Proibida')
}

// NOT  !
const negativo = !true
console.log(negativo)


const y = 'Sergio' && 0 && 'Sanchez'  //  Retorna o Primeiro Falsy ou último Truthy
console.log(y)

const z = 0 || 'Sergio' || 'Sanchez'  //  Retorna o Primeiro Truthy
console.log(z)