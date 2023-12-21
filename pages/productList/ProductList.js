import { listViewStyle, gridViewStyle } from '/utils/cardstyle.js'

// import { fetchData } from '../../service/productList.service.js'
const switchers = document.querySelectorAll(
  '.product-list__view-icons .product-list__view-icon',
)
const viewWraps = document.querySelectorAll('.view-wrap')
const listView = document.querySelector('.list-view')
const gridView = document.querySelector('.grid-view')
const listWrapper = document.getElementById('list-view__wrapper')
const gridWrapper = document.getElementById('grid-view__wrapper')
const cardIcons = document.getElementsByClassName('icon')
const pagesContainer = document.getElementById('pages')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
let dataSet = []
const perPage = 6
let currentPage = 1
let likedProducts = []

// ------------------- FETCH Products ----------------------
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon')) {
      handleCardIconClick(event)
    }
  })
})

fetch('./ProductList.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.productList)
    dataSet = data.productList // Update the global dataSet variable with fetched data
    displayPageNav(perPage) // Update pagination buttons
    getProductList(currentPage, perPage) // Display initial page
  })
  .catch((error) => console.error('Error fetching data:', error))

// Todo: Refactor this function
// ------------------- Style switcher ----------------------
switchers.forEach(function (switcher) {
  switcher.addEventListener('click', function () {
    switchers.forEach(function (switcher) {
      switcher.classList.remove('active')
    })
    switcher.classList.add('active')
    const view = switcher.getAttribute('data-view')

    // Todo: remove unnecessary loop
    viewWraps.forEach(function (view) {
      view.style.display = 'none'
    })

    if (view == 'list-view') {
      listDisplay()
    } else {
      gridDisplay()
    }
  })
})

function listDisplay() {
  return (listView.style.display = 'block')
}

function gridDisplay() {
  return (gridView.style.display = 'block')
}

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

  listWrapper.innerHTML = ''
  gridWrapper.innerHTML = ''

  slicedItems.map((product) => {
    console.log(product)

    const listCard = listViewStyle(product)
    listWrapper.appendChild(listCard)

    const gridCard = gridViewStyle(product)

    gridWrapper.appendChild(gridCard)
  })
  const pageButtons = document.querySelectorAll('.pagination__button')
  pageButtons.forEach((button) => {
    button.classList.remove('activeClass')
    if (parseInt(button.textContent) === currentPage) {
      button.classList.add('activeClass')
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
      pageButton.classList.add('activeClass')
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

// ------------------- IsLiked or Not Func -----------------
function handleCardIconClick(event) {
  event.preventDefault()
  for (const icon of cardIcons) {
    if (icon.id === event.target.id) {
      const product = findProductByIconId(icon)
      if (product) {
        console.log(product)
        product.is_liked = !product.is_liked
        if (product.is_liked) {
          likedProducts.push(product)
        } else {
          const removeFavorite = likedProducts.findIndex(
            (favorite) => favorite.id === product.id,
          )
          likedProducts.splice(removeFavorite)
        }
        const favoritesProduct = JSON.stringify(likedProducts)
        localStorage.setItem('favoritesProduct', favoritesProduct)
        icon.style.color = product.is_liked ? 'red' : 'white'
      } else {
        console.log('Product not found with id:', product.id)
      }
    }
  }
}
