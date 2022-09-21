//  Capturando elementos lista, input e botão
const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

//  Criei um array vazio chamado tarefas
//  No lugar do array nós colocamos esse comando para pegar/get o item e colocar em uma lista de tarefas chamada "list_tarefas" OU um array vazio
//  JSON.parse transforma o JSON em um valor ou objeto
let tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

//  Função de Mostrar Tarefas
function mostraTarefas() {
  //  Ele limpa, pois se não ia adicionar a tarefa atual e a tarefa anterior
  listElement.innerHTML = ''
  //  For que percorre o array tarefas
  for (item of tarefas) {
    //  Cria o elemento li
    const itemList = document.createElement('li')
    //  Criou o texto de cada tarefa
    const itemText = document.createTextNode(item)

    //  Estilo do Material Design
    itemList.setAttribute('class', 'mdl-list__item')

    //  Cria o elemento de link (a)
    const linkElement = document.createElement('a')
    //  Estilo do Material Design
    linkElement.setAttribute('class', 'material-icons')

    //  Cria o texto com a palavra 'delete', para estilo do Material Design
    const linkText = document.createTextNode('delete')
    //  Deu o append para inserir o 'delete'
    linkElement.appendChild(linkText)

    //  Index/Posição de nossa tarefa no array tarefas
    const pos = tarefas.indexOf(item)
    //  Adicionou a função de Remover Tarefa no ícone do 'delete', removendo o item na posição dele
    linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

    itemList.appendChild(itemText)
    itemList.appendChild(linkElement)

    listElement.appendChild(itemList)
  }
}

//  Chamando função de Mostrar Tarefas
mostraTarefas()

//  Função de Adicionar Tarefas
function addTarefa() {
  //  Cria uma variável chamada tarefa, que vai receber o valor do input
  const tarefa = inputElement.value
  //  Dá o push no array tarefas
  tarefas.push(tarefa)
  //  Depois de adicionar ele limpa o campo do input
  inputElement.value = ''
  //  Chama a função de Mostrar as Tarefas
  mostraTarefas()
  //  Salvar no localStorage
  saveInLocalStorage()
}

//  Atribuindo função de Adicionar Tarefas ao clicar no botão
buttonElement.setAttribute('onclick', 'addTarefa()')

//  Função de remover Tarefa
function removeTarefa(pos) {
  //  Vai no index/posição do array tarefas, e dá um splice na posição do item tirando só 1 item
  tarefas.splice(pos, 1)
  mostraTarefas()
  //  Salvar no localStorage
  saveInLocalStorage()
}

//  Função para mandar o item para o localStorage
function saveInLocalStorage() {
  //  Vai setar no localStorage uma chave que vai receber valores do "array tarefas", que agora é o JSON.parse
  //  O JSON.stringify converte o valor em JSON, no caso tinha um array, e converteu em JSON
  localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
}