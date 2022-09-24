//  Blocking
const list = [1, 2, 3, 4]

list.forEach((item) => {
  console.log('Item Número: ', item)
})

console.log('finalizou aqui')

//  Non-blocking
const list2 = [5, 6, 7, 8]

setTimeout(() => {
  console.log('Passou pelo setTimeout')
}, 2000);

list2.forEach((item) => {
  console.log('Item número: ', item)
})

console.log('finalizou aqui novamente')


// setInterval(() => {
//   console.log('intervalo')
// }, 1000)  // A cada 1 segundo executa o comando


//  Para fazer uma promise, nós devemos passar duas funções como parâmetros, uma caso Sucesso e um caso Erro
//  para chamar a função de sucesso(resolve), usamos o .then
//  para chamar a função de erro(reject), usamos o .catch
function minhaPromise() {
  const promise = new Promise((resolve, reject) => {
    const sucesso = false  //  se true irá executar resolve, se false irá executar reject
    setTimeout(() => {
      if (sucesso) {
        resolve('Resolve')
      } else {
        reject('Reject')
      }
    }, 3000);
  })
  return promise
}

async function main() {
  console.log('ANTES')  //  para mostrar que foi executado ANTES da nossa promise

  try {
    const result = await minhaPromise()  // transformou em um código blocking
    console.log('SUCESSO: ', result)
  } catch (result) {
    console.log('ERRO: ', result)
  }

  //  O código acima é blocking (sync), e o código abaixo é non-blocking (async) 

  // minhaPromise().then((result) => {  // o retorno minhaPromise() é a própria promise, daí posso fazer o .then e .catch
  //   console.log('SUCESSO: ', result)
  // }).catch((result) => {
  //   console.log('ERRO: ', result)
  // })

  console.log('DEPOIS')  //  para mostrar que foi executado DEPOIS da nossa promise
}
main()