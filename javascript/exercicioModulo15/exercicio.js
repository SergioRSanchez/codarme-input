/* 1. Salário mínimo

- Declare uma variável chamada renda e atribua uma instrução somando os valores 350, 180, 600

- Declare uma variável e atribua à ela o valor de um salário mínimo.

- Atribua à outra variável

- Verifique se a variável renda é maior que um salário mínimo.

- Caso o valor da renda seja menor que um salário mínimo, informe quanto falta para atingir o valor.

- Caso o valor da renda seja maior, mostre uma mensagem "Recebe pelo menos um salário mínimo" */
console.log('----- Exercício 1 -----')

let renda = 350 + 180 + 600
const salarioMinimo = 1212
const salario = salarioMinimo

if (renda < salario) {
  console.log(`Falta R$ ${salario - renda} para atingir o valor.`)
} else {
  console.log('Recebe pelo menos um salário mínimo.')
}


/* 2. Classificação econômica

- Crie uma variável renda, e atribua um valor qualquer.

- Mostre no console a classe econômica (classe social) baseada nesse valor.

- Exemplo: O valor de 35000 deveria retornar "Classe A"

OBS: Você deve pesquisar as classificações econômicas definidas pelo IBGE. */
console.log('----- Exercício 2 -----')

const classeA = 22000
const classeB = 7100
const classeC = 2900

renda = 28300

//  if normal
console.log('If normal:')
if (renda > classeA) {
  console.log('Classe A')
} else if (renda > classeB) {
  console.log('Classe B')
} else if (renda > classeC) {
  console.log('Classe C')
} else {
  console.log('Classe D')
}

//  if ternário
console.log('If ternário:')
renda > classeA ? console.log('Classe A') : renda > classeB ? console.log('Classe B') : renda > classeC ? console.log('Classe C') : console.log('Classe D')


/* 3. Excluindo grupos

- Declare uma variável que será um objeto pessoa .

- Adicione nome, renda, se está empregado, e se é um herdeiro ou não.

- Usando o exercício anterior, verifique a classe econômica, excluindo herdeiros e desempregados. */
console.log('----- Exercício 3 -----')

const person = {
  name: 'Jão',
  renda: 7800,
  job: true,
  heir: false,
}

if (person.job === true && person.heir !== true) {
  person.renda > classeA ? console.log('Classe A') : person.renda > classeB ? console.log('Classe B') : person.renda > classeC ? console.log('Classe C') : console.log('Classe D')
} else if (person.heir === true) {
  console.log('Herdeiro')
} else if (person.job !== true) {
  console.log('Pessoa desempregada')
}


/* 4. Verificando um veículo

- Crie uma variável chamada veículo

- Crie atributos cor, marca (fiat, renault, chevrolet, mercedes...), modelo, tipo (carro, moto, caminhão)

- Utilize um switch baseado no tipo de veículo, para mostrar a mensagem O [MODELO] é um veículo de [RODAS] rodas da marca [MARCA] (substitua as variáveis na string)

OBS: Você não tem uma variável RODAS, então, terá que definir baseada no tipo de veículo. */
console.log('----- Exercício 4 -----')

const vehicle = {
  color: 'yellow',
  brand: 'volkswagen',
  model: 'brasilia',
  type: 'car',
}

switch (vehicle.type) {
  case 'car': console.log(`O/A ${vehicle.model} é um veículo de 4 rodas da marca ${vehicle.brand}.`)
    break;
  case 'motorcycle': console.log(`O/A ${vehicle.model} é um veículo de 2 rodas da marca ${vehicle.brand}.`)
    break;
  default: console.log(`O/A ${vehicle.model} é um veículo de 6 ou mais rodas da marca ${vehicle.brand}.`)
    break;
}