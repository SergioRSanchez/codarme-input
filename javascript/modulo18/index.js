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


console.log('Trabalhando com eventos')
const inputN1 = document.getElementById('n1')  // podemos suprimir o uso do window, que irá funcionar tbm
const inputN2 = document.getElementById('n2')

inputN1.onblur = function () {
  console.log('INPUT', inputN1.value)
}

