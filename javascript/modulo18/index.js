const containerRoot = window.document.getElementById('app')
console.log(containerRoot)
console.log(containerRoot.attributes)
console.log(containerRoot.attributes.x)
console.log(containerRoot.hasAttribute('class'))
console.log(containerRoot.hasAttribute('z'))
console.log(window.document.getElementsByTagName('div'))


console.log('Manipulando o elemento - mudando o conteúdo')
containerRoot.innerHTML = 'Olá HTML'


console.log('Criando e Adicionando Elemento')
const title = window.document.createElement('h1')  // Criando um elemento com tag h1
title.setAttribute('id', 'title')  // Adicionando um atributo id = 'title'
title.innerText = 'Olá DOM'  // Adicionando um texto
containerRoot.appendChild(title)  // Inserindo o elemento


console.log('Trabalhando com eventos, criando uma calculadora de soma')
const inputN1 = document.getElementById('n1')  // podemos suprimir o uso do window, que irá funcionar tbm
const inputN2 = document.getElementById('n2')
const button = document.getElementById('btn')
const appElement = document.getElementById('app2')

const resultElement = document.createElement('p')
resultElement.innerText = 'Não há valor ainda'
resultElement.style.backgroundColor = 'yellow'
appElement.appendChild(resultElement)

button.onclick = function () {
  const n1Value = Number(inputN1.value)
  const n2Value = Number(inputN2.value)
  const result = n1Value + n2Value
  resultElement.innerText = `${n1Value} + ${n2Value} = ${result}`
}

inputN1.onblur = function () {
  console.log('INPUT', inputN1.value)  // valor do primeiro input
}
inputN2.onblur = function () {
  console.log('INPUT', inputN2.value)  // valor do segundo input
}


console.log('Mais de uma função por evento')

const ev01 = () => console.log('1')
const ev02 = () => console.log('2')
button.addEventListener('click', ev01)
button.addEventListener('click', ev02)
button.removeEventListener('click', ev01)  // removemos o evento 1