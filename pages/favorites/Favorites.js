import { gridViewStyle } from '../../utils/cardstyle.js'

const gridWrapper = document.getElementById('favorites-wrapper')
// const cardIcons = document.getElementsByClassName('icon')
const pagesContainer = document.getElementById('pages')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

const favoritesProducts = JSON.parse(localStorage.getItem('favoritesProduct'))
let dataSet = favoritesProducts
const perPage = 6
let currentPage = 1

// ------------------- Get Product Func --------------------
async function getProductList(page = 1, perPage = 2) {
  let index, offSet

  if (page == 1 || page <= 0) {
    index = 0
    offSet = perPage
  } else if (page > dataSet.length) {
    index = page - 1
    offSet = dataSet.length
  } else {
    index = page * perPage - perPage
    offSet = index + perPage
  }

  const slicedItems = dataSet.slice(index, offSet)

  gridWrapper.innerHTML = ''

  slicedItems.map((product) => {
 
    const gridCard = gridViewStyle(product)

    gridWrapper.appendChild(gridCard)
  })
  const pageButtons = document.querySelectorAll('.pagination__button')
  pageButtons.forEach((button) => {
    button.classList.remove('active')
    if (parseInt(button.textContent) === currentPage) {
      button.classList.add('active')
    }
  })
}

function displayPageNav(perPage) {
  const totalItems = dataSet.length
  perPage = perPage ? perPage : 1
  const pages = Math.ceil(totalItems / perPage)

  for (let i = 1; i <= pages; i++) {
    const pageButton = document.createElement('button')
    pageButton.classList.add('pagination__button')
    pageButton.textContent = i
    pageButton.setAttribute('id', i)
    pageButton.addEventListener('click', () => {
      currentPage = i
      getProductList(i, perPage)
    })
    if (i === 1) {
      pageButton.classList.add('active')
    }
    pagesContainer.appendChild(pageButton)
  }
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    getProductList(currentPage, perPage)
  }
})

nextButton.addEventListener('click', () => {
  const totalItems = dataSet.length
  const totalPages = Math.ceil(totalItems / perPage)

  if (currentPage < totalPages) {
    currentPage++
    getProductList(currentPage, perPage)
  }
})

displayPageNav(perPage)
getProductList(1, perPage)
// ------------------- Find Product By Icon ID -------------
function findProductByIconId(icon) {
  return dataSet.find((product) => product.id == icon.id)
}

 
