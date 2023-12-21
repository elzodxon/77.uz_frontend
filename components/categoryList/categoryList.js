// eslint-disable-next-line no-undef
const favoriteProductButton = document.querySelectorAll(
  '.favorite__product-button',
)
const favoriteProductPath = document.querySelectorAll('.favorite-path')

for (let i = 0; i < favoriteProductButton.length; i++) {
  favoriteProductButton[i].addEventListener('click', () => {
    favoriteProductPath[i].classList.toggle('active')
  })
}

//CATEGORY
const categoryCards = document.querySelectorAll('.category-card')
categoryCards.forEach(function (card) {
  card.addEventListener('click', function () {
    // Remove "active" class from all category cards
    categoryCards.forEach(function (c) {
      c.classList.remove('active')
    })

    // Add "active" class to the clicked category card
    card.classList.add('active')
  })
})

//---------CATEGORY LIST----------///////////
document.addEventListener('DOMContentLoaded', function () {
  const categoryList = document.getElementById('category-list')



  function generateSubsubcategoryLinks(subsubcategories) {
    return subsubcategories
      .map((subsub) => {
        const subsubTitle = Object.keys(subsub)[0]
        const subsubLink = subsub[subsubTitle]

        return `<li><a class="category-links__item" href="./pages/productList/ProductList.html">${subsubLink}</a></li>`
      })
      .join('')
  }

  function generateSubcategoryLinks(subcategories) {
    return subcategories
      .map((subcategory) => {
        const subcategoryTitle = subcategory.subcategoryTitle
        const subsubcategoryLinks = generateSubsubcategoryLinks(
          subcategory.subsubcategories,
        )

        return `
               <li class="category-menu__item">
                   <span class="category-menu__title">
                       <span>${subcategoryTitle}</span>
                       <i class="icon-cheveron-right"></i>  
                   </span>
                   <div class="category-links">
                       <div class="dropdown-menu__back-title">
                           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M19.1998 22.4L12.7998 16L19.1998 9.60003" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                           <button class="dropdown-menu__back">${subcategoryTitle}</button>
                       </div>
                       <ul class="category-links__menu">${subsubcategoryLinks}</ul>
                   </div>
               </li>
           `
      })
      .join('')
  }

  function generateCategoryCards(categories) {
    return categories
      .map((category, index) => {
        return `
               <li class="category-group" role="button" itemid="${index + 1}">
                   <div class="category-card">
                       <div class="category-icon">
                          ${category.svg} 
                       </div>
                       <div class="category-card__text">
                           <div class="category-card__description">
                               <h2 class="category-name">${category.title}</h2>
                               <p class="adds-amount">${category.addsAmount}</p>
                           </div>
                           <svg class="category-revealer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M8 6L12 10L8 14" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                       </div>
                   </div>
                   <ul class="category-menu">${generateSubcategoryLinks(
                     category.subcategories,
                   )}</ul>
               </li>
           `
      })
      .join('')
  }

  categoryList.innerHTML = generateCategoryCards(categories)

  const backButton = document.querySelectorAll('.dropdown-menu__back-title')
  const categoryMenuItem = document.querySelectorAll('.category-menu__item')
  const categoryMenuItem1 = document.querySelectorAll('.category-links')

  const categoryGroups = document.querySelectorAll('.category-card')
  const categoryCards = document.querySelectorAll('.category-group')
  const categoryDropdowns = document.querySelectorAll('.category-menu')
  const categoryIcons = document.querySelectorAll('.category-icon')

  for (let i = 0; i < categoryGroups.length; i++) {
    categoryGroups[i].addEventListener('click', function () {
      for (let j = 0; j < categoryDropdowns.length; j++) {
        if (i === j) {
          continue
        }
        categoryDropdowns[j].classList.remove('active')
        categoryGroups[j].classList.remove('active')
        categoryCards[j].classList.remove('active')
        categoryCards[j].style.marginBottom = '0'
      }
      categoryDropdowns[i].classList.toggle('active')
      categoryGroups[i].classList.toggle('active')
      categoryCards[i].classList.toggle('active')
      categoryCards[i].style.marginBottom =
        `${categoryDropdowns[i].offsetHeight}px`
      const parentTop = categoryList.getBoundingClientRect().top // Initial parent's top distance from the top of the viewport;

      const currentChildTop = categoryGroups[i].getBoundingClientRect().top
      categoryDropdowns[i].style.top = `${
        Math.abs(parentTop - currentChildTop) + 97
      }px`
      categoryIcons[i].classList.toggle('active')
    })
  }

  for (let i = 0; i < categoryMenuItem.length; i++) {
    categoryMenuItem[i].addEventListener('click', function (e) {
      categoryMenuItem1[i].classList.add('active')
      const categoryGroup = e.target.closest('.category-group')
      categoryGroup.style.marginBottom = `${categoryMenuItem1[i].offsetHeight}px`
    })
  }
  for (let i = 0; i < backButton.length; i++) {
    backButton[i].addEventListener('click', function (e) {
      e.stopImmediatePropagation()
      const categoryGroup = e.target.closest('.category-group')
      const categoryDropDown = e.target.closest('.category-menu')
      categoryGroup.style.marginBottom = `${categoryDropDown.offsetHeight}px`
      categoryMenuItem1[i].classList.remove('active')
    })
  }

})

  function calculateCardsInOneRow() {
    // Get the container and card elements
    const container = document.getElementById('category-list')

    // Get the computed style for the grid container
    const containerStyle = window.getComputedStyle(container)

    // Extract the grid-template-columns value
    const gridColumnValue = containerStyle.getPropertyValue(
      'grid-template-columns',
    )

    // Split the value into an array of column widths
    const columnWidths = gridColumnValue.split(' ')

    // Calculate the number of cards in one row
    cardsInOneRow = columnWidths.length

    console.log('Number of cards in one row:', cardsInOneRow)
    return cardsInOneRow
  }

  // Call the function on window load or whenever necessary
  window.addEventListener('resize', calculateCardsInOneRow)
  window.addEventListener('load', calculateCardsInOneRow)

