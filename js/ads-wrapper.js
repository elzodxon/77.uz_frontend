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

// ------------------- Get Product Func --------------------
function productGetList(productList) {
  productList.forEach((product) => {
    const list_card = document.createElement('div')
    const grid_card = document.createElement('div')

    list_card.classList.add('list-view__card')
    grid_card.classList.add('grid-view__card')

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

  })
}
// Get the parent container where you want to append the items
const adsContainer = document.querySelector('.ads-wrapper')

// Iterate over the data and append the generated HTML to the container
data.forEach((item) => {
  adsContainer.innerHTML += generateHTML(item)
})

const favoriteProductButton = document.querySelectorAll(
  '.favorite__product-button',
)
const favoriteProductPath = document.querySelectorAll('.favorite-path')

for (let i = 0; i < favoriteProductButton.length; i++) {
  favoriteProductButton[i].addEventListener('click', () => {
    favoriteProductPath[i].classList.toggle('active')
  })
}
