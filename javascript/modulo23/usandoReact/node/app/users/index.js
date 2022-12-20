//  Definindo nossa lista de usuários com Hard Coded (passando direto no código)
const users = [
  { id: 1, name: 'Sergio' },
  { id: 2, name: 'Julia' },
]

function create(request, response) {
  //  Adiciona um item na lista
  const body = []

  //  request.on fica escutando os eventos 'data' que estão chegando
  request.on('data', (chunk) => {
    body.push(chunk)
  })

  //  Quando termina de mandar todos os pedaços, juntamos tudo e transformamos em string
  request.on('end', () => {
    const content = Buffer.concat(body).toString()
    const data = JSON.parse(content)
    const user = { id: Math.random(), name: data.name }
    users.push(user)
    // console.log(response)

    //  Devolvendo o código de status 201 (Created)
    response.statusCode = 201

    response.write(JSON.stringify(user))

    response.end()

    return
  })
}

function list(request, response) {
  //  Devolvendo o código de status 200 (OK)
  response.statusCode = 200

  //  Retorna a lista de usuários
  response.write(JSON.stringify(users))

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
    users.forEach((user) => {
      if (data.id === user.id) {
        user.name = data.name
        response.statusCode = 200
        response.write(JSON.stringify(user))
        response.end()
        return
      } else {
        return
      }
    })
    return
  })
}

function remove(request, response) { }

module.exports = {
  create,
  list,
  update,
  remove
}