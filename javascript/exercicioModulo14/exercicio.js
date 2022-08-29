// 1 - CRIE VARIÁVEIS E ATRIBUA OS VALORES PARA:
console.log('----- Exercício 1 -----')
// Seu nome:
const name = 'Sérgio'
console.log(name)

// Idade
let age = 32
console.log(age)

// Cidade
let city = 'São José do Rio Preto'
console.log(city)

// Altura
const heigh = 1.75
console.log(heigh)

// Data de Nascimento
const birth = '11/06/1990'
console.log(birth)

/* 2 - DECLARE UMA VARIÁVEL CHAMADA CIDADES E ATRIBUA UMA LISTA COM OS VALORES FLORIANÓPOLIS,
SÃO PAULO, RIO DE JANEIRO, GOIÂNIA E VITÓRIA, E A SUA CIDADE
MOSTRE NO CONSOLE A SUA CIDADE BUSCANDO ELA NESSA LISTA */
console.log('----- Exercício 2 -----')
const cities = [
  'Florianópolis',
  'São Paulo',
  'Rio de Janeiro',
  'Goiânia',
  'Vitória',
  'São José do Rio Preto',
]
console.log(cities[5])

/* 3 - RE-ATRIBUA O VALOR DA VARIÁVEL CIDADE NO EXERCÍCIO 1, RESGATANDO O VALOR DA LISTA DO EXERCÍCIO
2, E MOSTRE A VARIÁVEL CIDADE NO CONSOLE. */
console.log('----- Exercício 3 -----')
city = cities[5]
console.log(city)

/* 4 - DEFINE UMA VARIÁVEL COM O ANO ATUAL. DEPOIS DEFINA UMA VARIÁVEL COM O ANO DO SEU NASCIMENTO.
RE-ATRIBUA O VALOR DA VARIÁVEL IDADE, FAZENDO UM CÁLCULO COM AS DUAS VARIÁVEIS ANTERIORES. */
console.log('----- Exercício 4 -----')
const actualYear = 2022
const birthYear = 1990
age = actualYear - birthYear
console.log(age)

/* 5 - DEFINA DUAS VARIÁVEIS alunoHTML E alunoJS
- ATRIBUA O VALOR MARCOS NA VARIÁVEL HTML E FLÁVIA NA VARIÁVEL JS;
- MOSTRE NO CONSOLE A SEGUINTE FRASE: "O ALUNO QUE ESTUDA JAVASCRIPT É (nome do aluno)";
- MOSTRE NO CONSOLE A SEGUINTE FRASE: "O ALUNO QUE ESTUDA HTML É (nome do aluno)";
- USE CONCATENAÇÃO COMUM NA PRIMEIRA FRASE, E TEMPLATE STRING NA SEGUNDA */
console.log('----- Exercício 5 -----')
const alunoHTML = 'Marcos'
const alunoJS = 'Flávia'
console.log('O aluno que estuda JavaScript é ' + alunoJS)
console.log(`O aluno que estuda HTML é ${alunoHTML}`)

/* 6 - CRIE UMA LISTA DE ALUNOS COM PELO MENOS 5 ALUNOS, ONDE CADA ALUNO TENHA 5 INFORMAÇÕES:
- NOME;
- NOME DO CURSO;
- PORCENTAGEM ATUAL DE PROGRESSO DENTRO DO CURSO;
- SE O CURSO JÁ FOI FINALIZADO OU NÃO;
- UMA LISTA COM O NOME DAS AULAS FAVORITADAS (PELO MENOS 2 ITENS) */
console.log('----- Exercício 6 -----')
const studentsList = [
  {
    name: 'Sergio',
    course: 'JavaScript',
    percentage: 20,
    finished: false,
    favorites: ['List', 'Objects']
  },
  {
    name: 'Bruno',
    course: 'FullStack',
    percentage: 100,
    finished: true,
    favorites: ['JS', 'React']
  },
  {
    name: 'Gabriel',
    course: 'Python',
    percentage: 100,
    finished: true,
    favorites: ['Django', 'Flask']
  },
  {
    name: 'Yukihiro Matz',
    course: 'Ruby',
    percentage: 100,
    finished: true,
    favorites: ['POO', 'Perl']
  },
  {
    name: 'Chandler Carruth',
    course: 'Carbon',
    percentage: 80,
    finished: false,
    favorites: ['API', 'Safety and Tests']
  }
]
console.log(studentsList)