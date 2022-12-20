const todos = [{
  id: 1,
  text: 'Estudar NodeJS',
  completed: false
}]

function create(request, response) {
  const body = []

  request.on('data', (chunk) => {
    body.push(chunk)
  })

  request.on('end', () => {
    const content = Buffer.concat(body).toString()
    const data = JSON.parse(content)
    const todo = { id: Math.random(), text: data.text, completed: false }
    todos.push(todo)

    response.statusCode = 201

    response.write(JSON.stringify(todo))

    response.end()

    return
  })
}

function list(request, response) {
  response.statusCode = 200

  response.write(JSON.stringify(todos))

  response.end()

  return
}

function update(request, response) {
  const body = []
  request.on('data', (chunk) => {
    body.push(chunk)
  })
  request.on('end', () => {
    const content = Buffer.concat(body).toString()
    const data = JSON.parse(content)
    todos.forEach((todo) => {
      if (data.id === todo.id) {
        if (todo.completed === false) {
          todo.completed = true
          response.statusCode = 200
          response.write(JSON.stringify(todo))
          response.end()
          return
        } else {
          todo.completed = false
          response.statusCode = 200
          response.write(JSON.stringify(todo))
          return
        }
      }
    })
  })
}

function remove(request, response) { }

module.exports = {
  create,
  list,
  update,
  remove
}