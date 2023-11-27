/* eslint-disable no-debugger */
const languageButton = document.querySelector('.language-button')
const languageContent = document.querySelector('.language-content')
const switchers = document.querySelectorAll(
  '.product-list__view-icons .product-list__view-icon',
)
const view_wraps = document.querySelectorAll('.view-wrap')
const list_view = document.querySelector('.list-view')
const grid_view = document.querySelector('.grid-view')
const listWrapper = document.getElementById('list-view__wrapper')
const gridWrapper = document.getElementById('grid-view__wrapper')
const cardIcons = document.getElementById('grid_icon')

document.addEventListener('DOMContentLoaded', function () {
  // Fetch the JSON file
  fetch('./ProductList.json')
    .then((response) => response.json())
    .then((data) => {
      // Once the data is loaded, call a function to render it
      productGetList(data.productList)
    })
    .catch((error) => console.error('Error fetching data:', error))
})

languageButton.addEventListener('click', (e) => {
  e.preventDefault()
  languageContent.classList.toggle('active')
})

switchers.forEach(function (switcher) {
  switcher.addEventListener('click', function () {
    switchers.forEach(function (switcher) {
      switcher.classList.remove('active')
    })

    switcher.classList.add('active')

    var view = switcher.getAttribute('data-view')

    view_wraps.forEach(function (view) {
      view.style.display = 'none'
    })
    if (view == 'list-view') {
      list_view.style.display = 'block'
    } else {
      grid_view.style.display = 'block'
    }
  })
})

function productGetList(productList) {
  productList.forEach((product) => {
    const list_card = document.createElement('div')
    const grid_card = document.createElement('div')
    list_card.classList.add('list-view__card')
    grid_card.classList.add('grid-view__card')

    // ----------------Card list style--------------------
    list_card.innerHTML = `
            <div class="list-view__card-symbols">
              <img class="list-view__card-image card-image" src="${
                product.photo
              }" alt="Product photo" />
            </div>
            <div class="list-view__card-content">
              <div class="list-view__top-content">
                <h3 class="list-view__card-title card-title">
               ${product.name}
                </h3>
                <span class="badge card-address"> ${
                  product.address.district.name
                }</span>
              </div>
              <div class="list-view__bottom-content">
                <p class="list-view__card-price card-price">
               ${product.price}<span> UZS </span>
                </p>
                <div>
                  <p class="list-view__card-date card-date"> ${dateFormatter(
                    product.published_at,
                  )}</p>
                  <a class="list-view__card-number card-phoneNum" href="tel:${
                    product.seller.phone_number
                  }">${product.seller.phone_number}</a>
                </div>
              </div>
            </div>`
    listWrapper.appendChild(list_card)

    // ----------------Card grid style--------------------
    grid_card.innerHTML = `
            <div class="grid-view__card-symbols">
              <div id="grid_icon" class="grid-view__card-icon">
              <iconify-icon id="icon"  icon="tabler:heart-filled"></iconify-icon>
              </div>
              <img class="grid-view__card-image card-image" src="${
                product.photo
              }" alt="Product photo" />
            </div>
            <div class="grid-view__card-content">
              <span class="badge card-address">${
                product.address.district.name
              }</span>
              <h3 class="grid-view__card-title card-title">${product.name}</h3>
              <p class="grid-view__card-date card-date">${dateFormatter(
                product.published_at,
              )}</p>
              <a class="grid-view__card-number card-phoneNum" href="tel:${
                product.seller.phone_number
              }">${product.seller.phone_number}</a>
              <p class="grid-view__card-price card-price"> ${
                product.price
              }<span> UZS </span></p>
            </div>`
    gridWrapper.appendChild(grid_card)

    // ---------------- Is Like Function -----------------
  })
}

function dateFormatter(date) {
  const dateObject = new Date(date)

  // Extract the individual components of the date
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1 // Months are zero-based, so add 1
  const year = dateObject.getFullYear()

  // Format the date components as 'DD-MM-YYYY'
  const formattedDate = `${day < 10 ? '0' : ''}${day}-${
    month < 10 ? '0' : ''
  }${month}-${year}`

  return formattedDate
}

// Loop through each element and add a click event listener
console.log(cardIcons)
for (let i = 0; i < cardIcons.length; i++) {
  debugger
  cardIcons[i].addEventListener('click', handleCardIconClick)
}

// Your function to be called on icon click
function handleCardIconClick() {
  debugger

  // Your logic for the click event
  alert('Icon clicked!')
}