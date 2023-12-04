const postsPerPage = 5
let currentPage = 1
const pagesToShow = 3 // Number of pages to show at a time

// const paginationContainer = document.querySelector('.pagination')
const pagesContainer = document.getElementById('pages')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const postListContainer = document.getElementById('post-list')

function displayPosts() {
  fetch(
    `https://admin.77.uz/api/v1/store/list/ads/?page_size=${postsPerPage}&page=${currentPage}`,
  )
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts)
      postListContainer.innerHTML = ''

      posts.results.forEach((post) => {
        const postItem = document.createElement('div')
        postItem.classList.add('post-item')
        postItem.innerHTML = `
                    <h3>${post.name}</h3>
                    <p>${post.price}</p>
                `
        postListContainer.appendChild(postItem)
      })

      updatePagination()
    })
    .catch((error) => console.error(error))
}

function updatePagination() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const totalPosts = data.length
      const totalPages = Math.ceil(totalPosts / postsPerPage)

      pagesContainer.innerHTML = ''

      // Calculate the range of pages to show
      const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1)
      const endPage = Math.min(startPage + pagesToShow - 1, totalPages)

      // Create buttons for the range of pages
      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button')
        pageButton.classList.add('pagination__button')
        pageButton.textContent = i
        pageButton.addEventListener('click', () => {
          currentPage = i

          displayPosts()
        })
        if (i === currentPage) {
          pageButton.classList.add('active')
        }
        pagesContainer.appendChild(pageButton)
      }

      prevButton.disabled = currentPage === 1
      nextButton.disabled = currentPage === totalPages
    })
    .catch((error) => console.error(error))
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    displayPosts()
  }
})

nextButton.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const totalPosts = data.length
      const totalPages = Math.ceil(totalPosts / postsPerPage)

      if (currentPage < totalPages) {
        currentPage++
        displayPosts()
      }
    })
    .catch((error) => console.error(error))
})

displayPosts()
