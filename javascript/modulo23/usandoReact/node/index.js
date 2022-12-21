//  Pacote do Node para permanecer escutando as chamadas HTTP
const http = require('http')
const url = require('url')

//  Importando as rotas
const usersRoute = require('./app/users')
const todosRoute = require('./app/todos')

// Definindo as rotas da maneira mais prática
const routes = {
  '/users': {
    POST: usersRoute.create,
    GET: usersRoute.list,
    PUT: usersRoute.update,
    DELETE: usersRoute.remove
  },

  '/todos': {
    POST: todosRoute.create,
    GET: todosRoute.list,
    PUT: todosRoute.update,
    DELETE: todosRoute.remove
  }
}


//  Criando o servidor
const server = http.createServer((request, response) => {

  //  Definindo o Header
  response.setHeader('Content-type', 'application/json')

  //  Separando Path de queryString para ela ser parâmetro e não mais parte do Path
  const requestUrl = url.parse(request.url, true)


  try {
    //  Acessando as rotas
    routes[requestUrl.pathname][request.method](request, response)
  } catch (error) {
    //  Se erro
    response.statusCode = 404
    response.end()
  }





  //  Método com ifs usado para explicar, foi substituído pelo método acima
  //  Definindo rotas
  // if (requestUrl.pathname === '/users') {

  //   //  Método POST e GET
  //   if (request.method === 'POST') {

  //     //  Função importada de criar usuário
  //     usersRoute.create(request, response)

  //   } else if (request.method === 'GET') {

  //     //  Função importada de listar usuários
  //     usersRoute.list(request, response)

  //   } else if (request.method === 'PUT') {

  //     //  Função importada de update de usuário
  //     usersRoute.update(request, response)

  //   } else if (request.method === 'DELETE') {

  //     //  Função importada de apagar usuário
  //     usersRoute.remove(request, response)

  //   }
  // } else if (requestUrl.pathname === '/todos') {

  //   //  Método POST e GET
  //   if (request.method === 'POST') {

  //     //  Função importada de criar usuário
  //     todosRoute.create(request, response)

  //   } else if (request.method === 'GET') {

  //     //  Função importada de listar usuários
  //     todosRoute.list(request, response)

  //   } else if (request.method === 'PUT') {

  //     //  Função importada de update de usuário
  //     todosRoute.update(request, response)

  //   } else if (request.method === 'DELETE') {

  //     //  Função importada de apagar usuário
  //     todosRoute.remove(request, response)

  //   }
  // }

})


//  Faz o programa ficar o tempo todo escutando, e passamos a porta que queremos que escute
//  Porta 80 é a padrão, e as vezes usamos a 3000 em Desenvolvimento
server.listen(3000)