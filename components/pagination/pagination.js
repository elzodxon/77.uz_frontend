const postsPerPage = 4
let currentPage = 1
const pagesToShow = 2 // Number of pages to show at a time

// const paginationContainer = document.querySelector('.pagination')
const pagesContainer = document.getElementById('pages')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const postListContainer = document.getElementById('post-list')
let products = []

function displayPosts(page = 1, perPage = 4) {
  const slicedPosts = products.slice((page - 1) * perPage, perPage * page)
  postListContainer.innerHTML = ''
  slicedPosts.forEach((post) => {
    const postItem = document.createElement('div')
    postItem.classList.add('post-item')
    postItem.innerHTML = `
                        <h3>${post.name}</h3>
                        <p>${post.price}</p>
                    `
    postListContainer.appendChild(postItem)
  })
}

function updatePagination() {
  const totalPosts = products.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  pagesContainer.innerHTML = ''

  // Calculate the range of pages to show
  const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1)
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages)

  // Create buttons for the range of pages
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('button')

    pageButton.textContent = i
    pageButton.addEventListener('click', () => {
      currentPage = i
      displayPosts(currentPage, 4)
    })

    //  shu yerdasan
    // allButtons.forEach(button => button.classList.remove('active'))

    // pageButton.classList.add('active')

    pagesContainer.appendChild(pageButton)
  }

  prevButton.disabled = currentPage === 1
  nextButton.disabled = currentPage === totalPages

  // Create button to go to the last page (only if not on the last page)
  if (currentPage < totalPages) {
    const lastPageButton = document.createElement('button')
    lastPageButton.textContent = 'Last Page'
    lastPageButton.addEventListener('click', () => {
      currentPage = totalPages
      displayPosts(currentPage)
    })
    pagesContainer.appendChild(lastPageButton)
  }

  // Create button to go to the first page (only when on the last page)
  if (currentPage === totalPages) {
    const firstPageButton = document.createElement('button')
    firstPageButton.textContent = 'First Page'
    firstPageButton.addEventListener('click', () => {
      currentPage = 1
      displayPosts(currentPage)
    })
    pagesContainer.insertBefore(firstPageButton, pagesContainer.firstChild)
  }
}

function fetchPosts() {
  fetch('../../pages/product-list/ProductList.json')
    .then((response) => response.json())
    .then((posts) => {
      products = posts.productList
    })
    .then(() => displayPosts())
    .then(() => updatePagination())
}

fetchPosts()

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    displayPosts()
  }
})

nextButton.addEventListener('click', () => {
  const totalPosts = products.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  if (currentPage < totalPages) {
    currentPage++
    displayPosts()
  }
})
