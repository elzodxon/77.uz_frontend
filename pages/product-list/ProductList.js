const switchers = document.querySelectorAll(
  '.product-list__view-icons .product-list__view-icon',
)
const view_wraps = document.querySelectorAll('.view-wrap')
const list_view = document.querySelector('.list-view')
const grid_view = document.querySelector('.grid-view')
const listWrapper = document.getElementById('list-view__wrapper')
const gridWrapper = document.getElementById('grid-view__wrapper')
const cardIcons = document.getElementsByClassName('icon')
let productList = []

// ------------------- FETCH Products ----------------------
document.addEventListener('DOMContentLoaded', function () {
  // Fetch the JSON file
  fetch('./ProductList.json')
    .then((response) => response.json())
    .then((data) => {
      // Once the data is loaded, call a function to render it
      productList = data.productList
      productGetList(productList)

      return productList
    })
    .catch((error) => console.error('Error fetching data:', error))

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon')) {
      handleCardIconClick(event)
    }
  })
})

// Todo: Refactor this function
// ------------------- Style switcher ----------------------
switchers.forEach(function (switcher) {
  switcher.addEventListener('click', function () {

      // Todo: remove unnecessary loop
    switchers.forEach(function (switcher) {
      switcher.classList.remove('active')
    })

    switcher.classList.add('active')

    var view = switcher.getAttribute('data-view')

      // Todo: remove unnecessary loop
    view_wraps.forEach(function (view) {
      view.style.display = 'none'
    })

      // Todo: render only one view
    if (view == 'list-view') {
      list_view.style.display = 'block'
    } else {
      grid_view.style.display = 'block'
    }
  })
})


// Todo: Refactor this function and rendering function. PERFORMANCE!!!!
// ------------------- Get Product Func --------------------
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
                <a href="#" class="list-view__card-title card-title">
               ${product.name}
                </a>
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
              <div  class="grid-view__card-icon">
              <iconify-icon id="${
                product.id
              }" class="icon" icon="tabler:heart-filled"></iconify-icon>
              </div>
              <img class="grid-view__card-image card-image" src="${
                product.photo
              }" alt="Product photo" />
            </div>
            <div class="grid-view__card-content">
              <span class="badge card-address">${
                product.address.district.name
              }</span>
              <a href="#" class="grid-view__card-title card-title">${
                product.name
              }</a>
              <p class="grid-view__card-date card-date">${dateFormatter(
                product.published_at,
              )}</p>
              <a class="grid-view__card-number card-phoneNum" href="tel:${
                product.seller.phone_number
              }">${formatPhoneNumber(product.seller.phone_number)}</a>
              <p class="grid-view__card-price card-price"> ${numbersWithSpace(
                product.price,
              )}<span> UZS </span></p>
            </div>`
    gridWrapper.appendChild(grid_card)

  })
}

// ------------------- Date formatter Func -----------------
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


// Todo: Refactor Naming -> formatMoney maybe?
// ------------------- Numbers with space Func -------------
function numbersWithSpace(number) {
  const formattedNum = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return formattedNum
}


// Todo: Refactor this function
// ------------------- Phone num Formatter Func ------------
function formatPhoneNumber(phoneNumber) {
  // Remove non-digit characters from the phone number
  const cleanedNumber = phoneNumber.replace(/\D/g, '')

  // Apply the desired formatting
  const formattedNumber = `+${cleanedNumber.slice(0, 3)}-${cleanedNumber.slice(
    3,
    5,
  )}-${cleanedNumber.slice(5, 8)}-${cleanedNumber.slice(
    8,
    10,
  )}-${cleanedNumber.slice(10)}`

  return formattedNumber
}

// ------------------- Find Product By Icon ID -------------
function findProductByIconId(icon) {
  const foundProduct = productList.find((product) => product.id == icon.id)

  return foundProduct

  // return product found by icon id
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
