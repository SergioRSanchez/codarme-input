const promise = fetch('https://jsonplaceholder.typicode.com/posts')

// promise.then((result) => {
//   result.json().then((data) => {
//     console.log(data)
//   })
// })

promise
  .then(result => result.json())
  .then(data => console.log(data))