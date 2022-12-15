//  Pacote do Node para permanecer escutando as chamadas HTTP
const http = require('http')


//  Definindo nossa lista de usuários com Hard Coded (passando direto no código)
const users = [
  { id: 1, name: 'Sergio' },
  { id: 2, name: 'Julia' },
]


//  Criando o servidor
const server = http.createServer((request, response) => {

  //  Definindo o Header
  response.setHeader('Content-type', 'application/json')

  //  Definindo rotas
  if (request.url === '/users') {

    //  Método POST e GET
    if (request.method === 'POST') {

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
      })

    } else {

      //  Devolvendo o código de status 200 (OK)
      response.statusCode = 200

      //  Retorna a lista de usuários
      response.write(JSON.stringify(users))

      response.end()
    }
  } else if (request.url === '/todos') {

    const todos = [{
      id: 1,
      text: 'Estudar NodeJS',
      completed: false
    }]

    response.statusCode = 200
    response.write(JSON.stringify(todos))
    response.end()
  }

})


//  Faz o programa ficar o tempo todo escutando, e passamos a porta que queremos que escute
//  Porta 80 é a padrão, e as vezes usamos a 3000 em Desenvolvimento
server.listen(3000)