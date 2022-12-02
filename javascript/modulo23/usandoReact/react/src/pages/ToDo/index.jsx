import { useState } from 'react'

import { ReactComponent as TaskIcon } from '../../assets/toDoTask.svg'
import { ReactComponent as BoardIcon } from '../../assets/toDoBoard.svg'
import { ReactComponent as CheckIcon } from '../../assets/taskCheck.svg'
import { ReactComponent as UncheckedIcon } from '../../assets/taskUnchecked.svg'
import { ReactComponent as RemoveIcon } from '../../assets/taskRemove.svg'

import './main.css'



export function ToDo () {

  const [text, setText] = useState(null)

  const [todos, setTodos] = useState([{
    id: 1,
    text: 'Codar',
    checked: true
  }, {
    id: 2,
    text: 'Estudar React',
    checked: false
  }])

  //  Adicionar uma tarefa
  const addTask = () => {
    if (!text) return alert('Preencha uma tarefa.');
    const newTask = {
      id: Math.random(),
      text: text,
      checked: false
    }

    setTodos([...todos, newTask])
    setText('')
  }

  //  Remover uma tarefa
  const removeTask = (id) => {
    const newList = todos.filter(todos => todos.id !== id);
    setTodos(newList)
  }

  //  Checar tarefa
  const toogleChecked = (id, checked) => {
    const index = todos.findIndex(todos => todos.id === id)
    const newList = todos
    newList[index].checked = !checked
    setTodos([...newList])
  }

  return (
    <>
      <div className="container">
        <div className="inputContainer">
          <div className="inputTitle">
            <TaskIcon width={32} />
            <h1>Adicionar uma tarefa</h1>
          </div>
          <div className="inputField">
            <input 
              value={text}
              type="text" 
              placeholder="Descreva a tarefa" 
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTask}>Criar tarefa</button>
          </div>
        </div>

        <div className="taskBoard">
          <div className="boardTitle">
            <BoardIcon width={32} />
            <h1>Quadro de tarefas</h1>
          </div>
          <ul>
            {todos.map((text) => (
              <>
                <div key={text.id} className={text.checked ? "taskChecked" : "taskUnchecked"} >
                  <button onClick={() => toogleChecked(text.id, text.checked)}>
                    {text.checked ? <CheckIcon width={24} /> : <UncheckedIcon width={24} />}
                  </button>
                  <p>{text.text}</p>
                  <button>
                    <RemoveIcon width={24} onClick={() => removeTask(text.id)} />
                  </button>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}