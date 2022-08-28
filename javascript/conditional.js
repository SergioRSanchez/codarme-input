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


