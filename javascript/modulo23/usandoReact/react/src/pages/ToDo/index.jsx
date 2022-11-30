import { useState } from 'react'

import { ReactComponent as TaskIcon } from '../../assets/toDoTask.svg'
import { ReactComponent as BoardIcon } from '../../assets/toDoBoard.svg'
import { ReactComponent as CheckIcon } from '../../assets/taskCheck.svg'
import { ReactComponent as UncheckedIcon } from '../../assets/taskUnchecked.svg'
import { ReactComponent as RemoveIcon } from '../../assets/taskRemove.svg'

import './main.css'

function Task ({todo}) {
  const [ checked, setChecked ] = useState(false)
  const toggleCheck = () => {setChecked(!checked)}
  return (
    <>
      <div className={checked ? "taskChecked" : "taskUnchecked"}>
        <button onClick={toggleCheck}>
          {checked ? <CheckIcon width={24} /> : <UncheckedIcon width={24} />}
        </button>
        <p>{todo.text}</p>
        <button>
          <RemoveIcon width={24} onClick={() => deleteTodo(todo.id)} />
        </button>
      </div>
    </>
  )
}


const initialValue = {}

export function ToDo (props) {

  const [text, setText] = useState(null)
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)

  const todoCreate = (text) => {
    const todoObj = {text: text, id: id}
    setId(id + 1)
    todoHandler(todoObj)
  }

  const todoHandler = (todo) => {
    console.log(todo)
    setTodos([...todos, todo])
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
              type="text" 
              placeholder="Descreva a tarefa" 
              onChange={(e) => setText(e.target.value)} 
            />
            <button onClick={() => props.todoCreate(text)}>Criar tarefa</button>
          </div>
        </div>

        <div className="taskBoard">
          <div className="boardTitle">
            <BoardIcon width={32} />
            <h1>Quadro de tarefas</h1>
          </div>
          <ul todoHandler={todoHandler}>
            {todos.map((todo) => <Task todo={todo} key={todo.id} />)}
            {/* <Task /> */}
          </ul>
        </div>
      </div>
    </>
  )
}