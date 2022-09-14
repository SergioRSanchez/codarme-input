console.log('----- Rest Params -----')
function sum(...nums) {
  console.log(nums)
  return nums.reduce((acc, num) => acc + num)
}
console.log(sum(1, 1, 1, 1, 1, 'asds', true))  // observe que podemos passar qualquer valor


console.log('----- Spread Operator -----')
const listaSpread = [1, 2, 3, 4]
console.log(sum(listaSpread))
console.log(sum(listaSpread[0], listaSpread[1]))


console.log('----- Destructuring Assignment -----')