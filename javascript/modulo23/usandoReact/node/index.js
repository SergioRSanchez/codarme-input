//  Pacote do Node para permanecer escutando as chamadas HTTP
const http = require('http')

//  Criando o servidor
const server = http.createServer((request, response) => {
  //  Resposta do servidor para o navegador, devolvendo o código de status e os cabeçalhos
  response.writeHead(200, {
    'Content-type': 'text/html'
  })

  response.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello React</title>

      <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    </head>
    <body>
      <div>Hello Http</div>
    </body>
    </html>
  `)
  response.end()
})

//  Faz o programa ficar o tempo todo escutando, e passamos a porta que queremos que escute
//  Porta 80 é a padrão, e as vezes usamos a 3000 em Desenvolvimento
server.listen(3000)