const inputElement = document.getElementById('input-task')
const createBtnElement = document.getElementById('btn-create')
const listElement = document.querySelector('ul')

let tarefas = fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => console.log(json)) || []

function showTasks() {
  listElement.innerHTML = ''
  for (item of tarefas) {

    const itemText = document.createTextNode(item.task)

    const taskFieldElement = document.createElement('a')
    taskFieldElement.setAttribute('class', 'task-field')

    const containerTaskFieldElement = document.createElement('div')
    containerTaskFieldElement.setAttribute('class', 'container-task-field')
    taskFieldElement.appendChild(containerTaskFieldElement)

    const checkElement = document.createElement('button')
    checkElement.setAttribute('class', 'btn-check')
    const checkElementImg = document.createElement('img')
    checkElementImg.setAttribute('src', './icons/Frame.svg')
    const pElement = document.createElement('p')
    checkElement.appendChild(checkElementImg)
    containerTaskFieldElement.appendChild(checkElement)
    containerTaskFieldElement.appendChild(pElement)

    const deleteBtnElement = document.createElement('button')
    deleteBtnElement.setAttribute('class', 'btn-delete')
    const deleteImg = document.createElement('img')
    deleteImg.setAttribute('src', './icons/remove.svg')
    deleteBtnElement.append(deleteImg)
    taskFieldElement.appendChild(deleteBtnElement)

    const pos = tarefas.indexOf(item)

    deleteBtnElement.setAttribute('onclick', `removeTarefa(${pos})`)
    checkElement.setAttribute('onclick', `checkTarefa(${pos})`)

    saveInLocalStorage()

    pElement.appendChild(itemText)
    listElement.appendChild(taskFieldElement)
    taskFieldElement.appendChild(deleteBtnElement)

    if (item.checked === true) {
      taskFieldElement.setAttribute('class', 'task-field checked')
      checkElementImg.setAttribute('src', './icons/check.svg')
    } else {
      taskFieldElement.setAttribute('class', 'task-field')
      checkElementImg.setAttribute('src', './icons/Frame.svg')
    }
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
  if (tarefas[pos].checked === false) {
    tarefas[pos].checked = true
  } else {
    tarefas[pos].checked = false
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