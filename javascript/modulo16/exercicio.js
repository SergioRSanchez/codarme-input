/* 1. Arrow function + Template String

- Crie uma arrow function que receba 3 parâmetros, e retorne a soma dos dois primeiros multiplicado pelo terceiro. Atribua à uma variável soma

- Atribua o valor da execução da função acima, à uma variável "resultado".

- Mostre no console a frase "A resultado da execução é VALOR". Substitua o VALOR pelo resultado usando template string */
console.log('-----Exercício 1-----')

const soma = (n1, n2, n3) => (n1 + n2) * n3

const result = soma(1, 2, 3)

console.log(`O resultado da execução é ${result}`)


/* 2. Soma + Multiplicação do resultado

- Crie uma função que receba quatro argumentos e retorne a soma dos mesmos.

- Defina uma variável que receba o retorno da função acima, multiplicado por 3. (sem usar outra variável)

- Mostre no console o valor final. */
console.log('-----Exercício 2-----')

function sum2(n1, n2, n3, n4) {
  return n1 + n2 + n3 + n4
}

const resultSum2 = sum2(1, 2, 3, 4) * 3
console.log(resultSum2)


/* 3. Crie uma função com as seguintes características:

- A função deve receber 3 parâmetros

- Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a mensagem: "Os valores não foram preenchidos corretamente!"

- O retorno da função deve ser a soma dos 3 parâmetros, multiplicando por 4 o resultado da soma.

- Invoque a função criada acima, passando só um número como parâmetro e mostre o resultado. */
console.log('-----Exercício 3-----')

function exercise3(n1, n2, n3) {
  if (n1 == null || n2 == null || n3 == null) {
    console.log('Os valores não foram preenchidos corretamente!')
  } else {
    console.log((n1 + n2 + n3) * 4)
  }
}
exercise3(1)


/* 4. Criador de objetos

- Crie uma função que receba dois parâmetros: Nome e idade

- A função deve retornar um objeto com 3 atributos: nome, idade, anoNascimento. (para o cálculo do ano, ignore meses e dias)

- Atribua o valor à uma variável "pessoa"

- Crie uma função que recebe um parametro do tipo objeto (pessoa) e retorne a frase `NOME tem IDADE pois nasceu em ANO`. Substitua usando template string.

- Execute a função acima, e mostre a frase no console sem atribuir o valor à uma variável. */
console.log('-----Exercício 4-----')

const person = function (nome, idade) {
  return { nome: nome, idade: idade, anoNascimento: 2022 - idade }
}
console.log(person('Sergio', 32))

function exercise4(person) {
  return `${person.nome} tem ${person.idade} pois nasceu em ${person.anoNascimento}`
}
console.log(exercise4(person('Sergio')))