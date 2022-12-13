//  Pacote do Node para permanecer escutando as chamadas HTTP
const http = require('http')

const server = http.createServer((request, response) => {
  console.log('Hello HTTP')
})

//  Faz o programa ficar o tempo todo escutando, e passamos a porta que queremos que escute, no caso a utilizada pelo React
//  Porta 80 é a padrão, e as vezes usamos a 3000 em Desenvolvimento
server.listen(80)