//  FETCH
// const promise = fetch('https://jsonplaceholder.typicode.com/posts')


//  PRIMEIRO MÉTODO
// promise.then((result) => {
//   result.json().then((data) => {
//     console.log(data)
//   })
// })


//  SEGUNDO MÉTODO - ENCADEANDO THENS - INDICADO
// promise
//   .then(result => result.json())
//   .then(data => console.log(data))


async function getPost() {
  try {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await promise.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

async function main() {
  const posts = await getPost()
  const user01 = posts.filter(post => post.userId === 1)
  console.log(user01)
}
main()


const cardsElement = document.getElementById('cards')


async function showPosts() {
  const posts = await getPost()
  for (item of posts) {
    const containerElement = document.createElement('div')
    containerElement.setAttribute('class', 'container')
    cardsElement.appendChild(containerElement)

    const userIdElement = document.createElement('div')
    userIdElement.setAttribute('class', 'userId')
    userIdElement.innerText = 'USER' + item.userId
    containerElement.appendChild(userIdElement)

    const contentElement = document.createElement('div')
    contentElement.setAttribute('class', 'content')
    containerElement.appendChild(contentElement)

    const postIdElement = document.createElement('div')
    postIdElement.setAttribute('class', 'postId')
    postIdElement.innerText = 'post: ' + item.id
    contentElement.appendChild(postIdElement)

    const titleElement = document.createElement('div')
    titleElement.setAttribute('class', 'title')
    titleElement.innerText = item.title
    contentElement.appendChild(titleElement)

    const bodyElement = document.createElement('div')
    bodyElement.setAttribute('class', 'body')
    bodyElement.innerText = item.body
    contentElement.appendChild(bodyElement)
  }
}

showPosts()