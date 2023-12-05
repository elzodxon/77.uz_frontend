import { listViewStyle, gridViewStyle } from '../../utils/cardstyle.js'
import { fetchData } from '../../service/productList.service.js'
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
const postListContainer = document.getElementById('post-list')
let totalProducts = 0
let productList = []
const perpage = 5
let currentPage = 1
const pagesToShow = 3 // Number of pages to show at a time
let listStyle = false
let gridStyle = false

// ------------------- FETCH Products ----------------------
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon')) {
      handleCardIconClick(event)
    }
  })
})

fetchData(perpage, currentPage).then((data) => {
  totalProducts = data.count
  productList = data.results
  getProductList(data.results)
})

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

    // Todo: render only one view
    if (view == 'list-view') {
      listView.style.display = 'block'
      listStyle = true
    } else {
      gridView.style.display = 'block'
      gridStyle = true
    }
  })
})

// ------------------- Get Product Func --------------------
function getProductList(productList) {
  productList.forEach((product) => {
    console.log(product)
    if (listView) {
      // debugger
      const listCard = listViewStyle(product)
      listWrapper.appendChild(listCard)
    }
    if (gridView) {
      const gridCard = gridViewStyle(product)
      gridWrapper.appendChild(gridCard)
    }

  })
  updatePagination(productList)

}

function updatePagination(productList) {
  const totalPosts = totalProducts
    const totalPages = Math.ceil(totalPosts / perpage)

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

        getProductList(productList)
      })
      if (i === currentPage) {
        pageButton.classList.add('active')
      }
      pagesContainer.appendChild(pageButton)
    }

    prevButton.disabled = currentPage === 1
    nextButton.disabled = currentPage === totalPages
}

prevButton.addEventListener('click', () => {
if (currentPage > 1) {
  currentPage--
  // getProductList()
}
})

nextButton.addEventListener('click', () => {

const totalPosts = totalProducts
    const totalPages = Math.ceil(totalPosts / perpage)

    if (currentPage < totalPages) {
      currentPage++
      // getProductList()
    }
})

// ------------------- Find Product By Icon ID -------------
function findProductByIconId(icon) {
  const foundProduct = productList.find((product) => product.id == icon.id)
  
  return foundProduct
}

// ------------------- IsLiked or Not Func -----------------
function handleCardIconClick(event) {
  for (const icon of cardIcons) {
    if (icon.id === event.target.id) {
      const product = findProductByIconId(icon)
      if (product) {
        product.is_liked = !product.is_liked

        // Todo: refactor style changing
        icon.style.color = product.is_liked ? 'red' : 'white'
      } else {
        console.log('Product not found with id:', product.id)
      }
    }
  }
}
