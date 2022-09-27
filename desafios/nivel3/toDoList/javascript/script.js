//  Capturando elementos
const inputElement = document.getElementById('input-task')
const createBtnElement = document.getElementById('btn-create')
const listElement = document.querySelector('ul')

let tarefas = JSON.parse(localStorage.getItem('list_todo')) || []

function showTasks() {
  listElement.innerHTML = ''
  for (item of tarefas) {

    const itemText = document.createTextNode(item.task)

    //  criar o task field onde vai o check e a tarefa
    const taskFieldElement = document.createElement('a')
    taskFieldElement.setAttribute('class', 'task-field')

    const containerTaskFieldElement = document.createElement('div')
    containerTaskFieldElement.setAttribute('class', 'container-task-field')
    taskFieldElement.appendChild(containerTaskFieldElement)

    const checkElement = document.createElement('button')
    checkElement.setAttribute('class', 'btn-check')
    const checkElementImg = document.createElement('img')
    checkElementImg.setAttribute('src', './icons/frame.svg')
    const pElement = document.createElement('p')
    checkElement.appendChild(checkElementImg)
    containerTaskFieldElement.appendChild(checkElement)
    containerTaskFieldElement.appendChild(pElement)

    //  criar o botão de deletar
    const deleteBtnElement = document.createElement('button')
    deleteBtnElement.setAttribute('class', 'btn-delete')
    const deleteImg = document.createElement('img')
    deleteImg.setAttribute('src', './icons/remove.svg')
    deleteBtnElement.append(deleteImg)
    taskFieldElement.appendChild(deleteBtnElement)


    const pos = tarefas.indexOf(item)

    deleteBtnElement.setAttribute('onclick', `removeTarefa(${pos})`)
    checkElement.setAttribute('onclick', `checkTarefa(${pos})`)


    pElement.appendChild(itemText)
    listElement.appendChild(taskFieldElement)
    taskFieldElement.appendChild(deleteBtnElement)
  }
}

showTasks()

function addTarefa() {
  const tarefa = {
    task: inputElement.value,
    checked: false
  }

  tarefas.push(tarefa)

  inputElement.value = ''

  showTasks()

  saveInLocalStorage()
}


createBtnElement.setAttribute('onclick', 'addTarefa()')


function checkTarefa(pos) {
  for (item of tarefas) {
    if (tarefas[pos].checked === false) {
      tarefas[pos].checked = true
    } else {
      tarefas[pos].checked = false
    }
  }
  showTasks()
  saveInLocalStorage()
}

function removeTarefa(pos) {
  tarefas.splice(pos, 1)
  showTasks()
  saveInLocalStorage()
}

function saveInLocalStorage() {
  localStorage.setItem('list_todo', JSON.stringify(tarefas))
}

//  Agora só falta mudar as propriedades conforme o checked = true