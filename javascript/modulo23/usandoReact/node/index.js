//  Pacote do Node para permanecer escutando as chamadas HTTP
const http = require('http')
const url = require('url')

//  Importando as rotas
const users = require('./app/users')

// const todos = require('./app/todos')
console.log(users)

//  Definindo nossa lista de usuários com Hard Coded (passando direto no código)
// const users = [
//   { id: 1, name: 'Sergio' },
//   { id: 2, name: 'Julia' },
// ]

//  Definindo as rotas da maneira mais prática
// const routes = {
//   '/users': {
//     POST: users.create,
//     GET: users.list,
//     PUT: users.update,
//     DELETE: users.remove
//   },

//   '/todos': {
//     POST: todos.create,
//     GET: todos.list,
//     PUT: todos.update,
//     DELETE: todos.remove
//   }
// }


//  Criando o servidor
const server = http.createServer((request, response) => {

  //  Definindo o Header
  response.setHeader('Content-type', 'application/json')

  //  Separando Path de queryString para ela ser parâmetro e não mais parte do Path
  const requestUrl = url.parse(request.url, true)

  // Definindo as rotas
  // routes[requestUrl.pathname][request.method](request, response)




  //  Método com ifs usado para explicar, foi substituído pelo método acima
  //  Definindo rotas
  if (requestUrl.pathname === '/users') {

    //  Método POST e GET
    if (request.method === 'POST') {

      //  Função importada de criar usuário
      users.create(request, response)

    } else if (request.method === 'GET') {

      //  Função importada de listar usuários
      users.list(request, response)

    } else if (request.method === 'PUT') {

      //  Função importada de update de usuário
      users.update(request, response)

    } else if (request.method === 'DELETE') {

      //  Função importada de apagar usuário
      users.remove(request, response)

    }
  } else if (requestUrl.pathname === '/todos') {

    const todos = [{
      id: 1,
      text: 'Estudar NodeJS',
      completed: false
    }]

    response.statusCode = 200
    response.write(JSON.stringify(todos))
    response.end()

    return
  }



  response.statusCode = 404
  response.end()

})


//  Faz o programa ficar o tempo todo escutando, e passamos a porta que queremos que escute
//  Porta 80 é a padrão, e as vezes usamos a 3000 em Desenvolvimento
server.listen(3000)