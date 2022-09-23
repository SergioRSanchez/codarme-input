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
// }, 1000)