//  Pacote do Node para permanecer escutando as chamadas HTTP
const http = require('http')


//  Definindo nossa lista de usuários
const users = [
  { id: 1, name: 'Sergio' },
  { id: 2, name: 'Julia' },
]


//  Criando o servidor
const server = http.createServer((request, response) => {

  //  Definindo o Header
  response.setHeader('Content-type', 'application/json')

  //  Método POST e GET
  if (request.method === 'POST') {

    //  Adiciona um item na lista
    const user = { id: 3, name: "Fulano" }
    users.push(user)

    //  Devolvendo o código de status 201 (Created)
    response.statusCode = 201

    response.write(JSON.stringify(user))

  } else {

    //  Devolvendo o código de status 200 (OK)
    response.statusCode = 200

    //  Retorna a lista de usuários
    response.write(JSON.stringify(users))

  }

  response.end()
})


//  Faz o programa ficar o tempo todo escutando, e passamos a porta que queremos que escute
//  Porta 80 é a padrão, e as vezes usamos a 3000 em Desenvolvimento
server.listen(3000)