module.exports = function create(request, response) {
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
    console.log(data)
    const user = { id: 3, name: data.name }
    users.push(user)

    //  Devolvendo o código de status 201 (Created)
    response.statusCode = 201

    response.write(JSON.stringify(user))

    response.end()

    return
  })
}

module.exports = function list(request, response) {
  //  Devolvendo o código de status 200 (OK)
  response.statusCode = 200

  //  Retorna a lista de usuários
  response.write(JSON.stringify(users))

  response.end()

  return
}

function update(request, response) { }

function remove(request, response) { }