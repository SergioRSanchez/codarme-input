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