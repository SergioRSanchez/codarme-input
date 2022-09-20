//  Capturar input
const input = window.document.getElementById('taskField')


//  Capturar task containers
const taskContainers = window.document.getElementById('taskContainers')


//  Criar um task container e uma task
const createTaskAction = function (event) {
  const taskContainer = window.document.createElement('div')
  taskContainer.setAttribute('class', 'taskContainer')
  const taskContainerP = window.document.createElement('p')
  taskContainerP.innerText = input.value
  taskContainer.appendChild(taskContainerP)
  taskContainers.appendChild(taskContainer)
  input.value = ''
  input.focus()
}


//  Capturar botão de Add Task
const addButton = window.document.getElementById('addTask')


const inputValue = []
//  Criar a task ao clicar em Add Task
addButton.onclick = function (event) {
  createTaskAction()
  inputValue.push(input.value)
  window.localStorage.setItem('lista', inputValue)
}



//  Capturar botão Reset Task
const resetButton = window.document.getElementById('resetTask')


//  Resetar todas as Tasks
resetButton.onclick = function (event) {
  window.localStorage.clear()
  location.reload()
}


//  Antes de tudo devo verificar se tem item na memória
const checkMemory = function (event) {
  const lista = window.localStorage.getItem('lista')
  console.log(lista)
}
checkMemory()
