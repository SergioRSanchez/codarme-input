/* ​1. Par ou ímpar?

- Declare uma variável que receba um array com 7 números

- Utilizando a função "forEach" nativa, percorra a lista e mostre no console se o número é par ou ímpar. Exemplo: "O número 4 é par" */
console.log('-----Exercício 1-----')

const exercicio1 = [1, 2, 3, 4, 5, 6, 7]

function parOuImpar(numero) {
  if (numero % 2 == 0) {
    console.log(`O número ${numero} é par`)
  } else {
    console.log(`O número ${numero} é ímpar`)
  }
}

exercicio1.forEach(parOuImpar)


/* 2. Listas derivadas

- Baseado no código do exercício anterior, crie duas outras listas, uma com números pares, outra com números ímpares, utilizando "filter"

- Mostre no console a quantidade de números pares e a quantidade de ímpares */
console.log('-----Exercício 2-----')

const listaPar = exercicio1.filter((numero) => {
  if (numero % 2 == 0) {
    return true
  } else {
    return false
  }
})
const listaImpar = exercicio1.filter((numero) => {
  if (numero % 2 != 0) {
    return true
  } else {
    return false
  }
})
console.log(listaPar.length)
console.log(listaPar)
console.log(listaImpar.length)
console.log(listaImpar)


/* 3. Alterando valores

- Utilize o método map para criar uma nova lista

- Os valores pares devem ser multiplicados por 2

- Os valores ímpares devem ser multiplicados por 3 */
console.log('-----Exercício 3-----')

const multiplicaPar = listaPar.map(item => {
  return item * 2
})
const multiplicaImpar = listaImpar.map(item => {
  return item * 3
})
console.log(multiplicaPar)
console.log(multiplicaImpar)


/* 4. Simulando forEach

- Declare uma função chamada forEach que recebe dois parâmetros: um array e um callback

- Use a estrutura "for" para percorrer o array e executar o callback para cada um dos itens da lista

- Execute forEach passando uma lista de 7 números, e um callback que mostre a mensagem "O número NUMERO é par/ímpar". */
console.log('-----Exercício 4-----')


/* 5. Somando e reduzindo

- Utilize reduce reduzir a lista do exercício 1

- Você deve usar soma quando o valor for par, e multiplicação quando o valor for ímpar

- Mostre no console o valor final

- Verifique, manualmente (no papel ou na calculadora) se o valor final está correto. */
console.log('-----Exercício 5-----')


/* 6. Cifra de Cezar

- Refaça o exercício da aula 8 do módulo 1, dessa vez usando JS

- Compartilhe no canal de exercícios no discord, usando a hashtag #exercicioMapaConversãoJS */
console.log('-----Exercício 6-----')