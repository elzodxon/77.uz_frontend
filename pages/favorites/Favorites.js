import { gridViewStyle } from '/utils/cardstyle.js'

const gridWrapper = document.getElementById('favorites-wrapper')
const cardIcons = document.getElementsByClassName('icon')
const pagesContainer = document.getElementById('pages')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

const favoritesProducts = JSON.parse(localStorage.getItem('favoritesProduct'))
let dataSet = favoritesProducts
const perPage = 6
let currentPage = 1

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon')) {
      handleCardIconClick(event)
    }
  })

  if(favoritesProducts.length === 0) {
    gridWrapper.innerHTML=`
      <div class="not-favorites">
        <img src="/assets/img/404.svg" alt="">
        <h1 class="title not-favorites__title">Избранные все еще доступно</h1>
      </div>
    `
  }
})

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

// ------------------- IsLiked or Not Func -----------------
function handleCardIconClick(event) {
  event.preventDefault()
  for (const icon of cardIcons) {
    if (icon.id === event.target.id) {
      const product = findProductByIconId(icon)
      if (product) {
        product.is_liked = !product.is_liked
        if (!product.is_liked) {
          const removeFavorite = likedProducts.findIndex(
            (favorite) => favorite.id === product.id,
          )
          likedProducts.splice(removeFavorite)
          location.reload()
        }
        const favoritesProduct = JSON.stringify(likedProducts)
        localStorage.setItem('favoritesProduct', favoritesProduct)
      } else {
        console.log('Product not found with id:', product.id)
      }
    }
  }
}
for (const icon of cardIcons) {
  icon.style.color = 'red'
}
