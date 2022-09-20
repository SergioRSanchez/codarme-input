//  Capturamos botão de adicionar evento
const addButton = window.document.getElementById('addButton')


//  Capturando div que iremos inserir o formulário
const task = window.document.getElementById('task')


//  Capturando div dos botões
const buttons = window.document.getElementById('buttons')


//  Capturando div das tarefas
const tarefas = window.document.getElementById('tasks')


//  Inserindo input na div
const addEvent = addButton.onclick = function (event) {

  //  Botão para confirmar
  const confirm = function (event) {
    addButton.innerText = 'O'
    addButton.style.backgroundColor = 'var(--blue2)'
  }
  confirm()

  //  Criamos um input
  const input = window.document.createElement('input')
  input.setAttribute('id', 'formulario')
  input.setAttribute('placeholder', 'Insira sua tarefa')
  task.appendChild(input)

  //  Botao para excluir
  const delButton = window.document.createElement('button')
  delButton.setAttribute('id', 'delButton')
  delButton.innerText = 'X'
  buttons.appendChild(delButton)

  //  Confirmar tarefa
  addButton.onclick = function (event) {
    //  Tarefa na tela
    const tarefa = window.document.createElement('p')
    tarefa.setAttribute('class', 'tarefa')
    tarefa.innerText = input.value
    tarefas.appendChild(tarefa)
    task.removeChild(input)
    addButton.removeEventListener('click', addEvent)
  }

  //  Negar tarefa
  delButton.onclick = function (event) {
    task.removeChild(input)
    delButton.removeEventListener('click', addEvent)
  }


}

