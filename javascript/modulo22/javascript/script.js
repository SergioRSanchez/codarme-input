import { soma } from './calc.js'

//  Escopo local
{
  var x = 10
  let y = 20
  const z = 30
}

console.log(x)
// console.log(y) -> não funciona pois não sofre içamento
// console.log(z) -> não funciona pois não sofre içamento


//  Atribuindo um valor para uma variável let
let t = 25
console.log(t)
//  Reatribuindo um valor para uma variável let
t = 27
console.log(t)


//  Atribuindo um valor para uma variável const
const p = 35
console.log(p)
//  Reatribuindo um valor para uma variável const resulta em um erro
// p = 37
// console.log(p)


// Porém podemos alterar um array ou objeto
const i = []
i.x = 40
console.log(i)  //  Temos um objeto x com o valor de 40
i.push('novo')
console.log(i)  //  Ou seja, nós não manipulamos o i, e sim o array dentro dele


console.log('Executando a função do arquivo calc.js')
const result = soma(1, 2)
console.log(result)