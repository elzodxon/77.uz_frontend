/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// const adsContainer = document.getElementById('ads-wrapper')

const cardIcons = document.getElementsByClassName('icon')
let productList = []

// ------------------- FETCH Products ----------------------
document.addEventListener('DOMContentLoaded', function () {
  // Fetch the JSON file
  fetch('pages/product-list/ProductList.json')
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

// ------------------- Get Product Func --------------------
function productGetList(productList) {
  $('#main').pagination({
    dataSource: productList,
    pageSize: 8,

    callback: function (data, pagination) {
      let wrapper = $('#main .ads-wrapper').empty()
      $.each(data, function (i, product) {
        $('#main .ads-wrapper').append(`
        <div class="grid-view__card" >
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
            <span class="badge card-address">${product.address.district.name}</span>
            <a href="#" class="grid-view__card-title card-title">${product.name}</a>
            <p class="grid-view__card-date card-date">${dateFormatter(
              product.published_at,
            )}</p>
            <a class="grid-view__card-number card-phoneNum" href="tel:${
            product.seller.phone_number
            }">${formatPhoneNumber(product.seller.phone_number)}</a>
            <p class="grid-view__card-price card-price"> ${numbersWithSpace(
              product.price,
            )}<span> UZS </span></p>
          </div>
        </div>
       `)
      })
    },
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

// Get the parent container where you want to append the items
// const adsContainer = document.querySelector('.ads-wrapper')

// Iterate over the data and append the generated HTML to the container
// data.forEach((item) => {
//   adsContainer.innerHTML += generateHTML(item)
// })

const favoriteProductButton = document.querySelectorAll(
  '.favorite__product-button',
)
const favoriteProductPath = document.querySelectorAll('.favorite-path')

for (let i = 0; i < favoriteProductButton.length; i++) {
  favoriteProductButton[i].addEventListener('click', () => {
    favoriteProductPath[i].classList.toggle('active')
  })
}
