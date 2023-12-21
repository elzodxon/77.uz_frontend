import {
  dateFormatter,
  moneyFormatter,
  phoneNumberFormatter,
} from '/utils/utils.js'

export function listViewStyle(product) {
  const listCard = document.createElement('a')
  listCard.classList.add('list-view__card')
  listCard.href = '../../pages/productSingle/ProductSingle.html'

  // ----------------Card list style--------------------
  listCard.innerHTML = `
        <div class="list-view__card-symbols">
            <img class="list-view__card-image card-image" src="${
              product.photo
            }" alt="Product photo" />
        </div>
        <div class="list-view__card-content">
            <div class="list-view__top-content">
                  <a href="../../pages/productSingle/ProductSingle.html" class="list-view__card-title card-title">
                    ${product.name}
                  </a>
                <span class="badge card-address"> ${
                  product.address.district.name
                }</span>
            </div>
           <div class="list-view__bottom-content">
              <p class="list-view__card-price card-price">
                ${moneyFormatter(product.price)}<span> UZS </span>
              </p>
           <div>
           <p class="list-view__card-date card-date"> ${dateFormatter(
             product.published_at,
           )}</p>
            <a class="list-view__card-number card-phoneNum" href="tel:${
              product.seller.phone_number
            }">${phoneNumberFormatter(product.seller.phone_number)}</a>
        </div>
    `
  return listCard
}

export function gridViewStyle(product) {
  const grid_card = document.createElement('a')
  
  grid_card.classList.add('grid-view__card')
  grid_card.href = '../../pages/productSingle/ProductSingle.html'
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
           <a href="../../pages/productSingle/ProductSingle.html" class="grid-view__card-title card-title">${
             product.name
           }</a>
           <p class="grid-view__card-date card-date">${dateFormatter(
             product.published_at,
           )}</p>
           <a class="grid-view__card-number card-phoneNum" href="tel:${
             product.seller.phone_number
           }">${phoneNumberFormatter(product.seller.phone_number)}</a>
           <p class="grid-view__card-price card-price"> ${moneyFormatter(
             product.price,
           )}<span> UZS </span></p>
      `

  return grid_card
}
