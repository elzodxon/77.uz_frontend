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

  const jsonData = [
    {
      title: 'Для женщин',
      addsAmount: '409 объявлений',
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="#388FF3"/>
</svg>`,
      subcategories: [
        {
          subcategoryTitle: 'Smartphone',
          subsubcategories: [
            { subcategoryInnerItem: 'Iphone' },
            { subcategoryInnerItem: 'Samsung' },
          ],
        },
        {
          subcategoryTitle: 'Speakers',
          subsubcategories: [
            { subcategoryInnerItem: 'Best Speaker Ever' },
            { subcategoryInnerItem: 'CST( Cant Stop Talking)' },
          ],
        },
        {
          subcategoryTitle: 'Accessory',
          subsubcategories: [
            { subcategoryInnerItem: 'Earphone' },
            { subcategoryInnerItem: 'Headphone' },
          ],
        }, // Add more subcategories as needed
      ],
    },
    {
      title: 'Обувь',
      svg: `
      <div style="display: flex;
width: 32px;
height: 32px;
padding: 7.888px 0px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 1.876px;
flex-shrink: 0;">
<svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.5314 10.1423H28.1127C26.2505 10.1423 24.4329 9.53987 22.9409 8.43756L20.6119 10.7666L19.2854 9.44012L21.4824 7.24306L20.3859 6.3305L17.963 8.75343L16.6365 7.42693L18.938 5.12543L17.8414 4.21281L15.3141 6.74018L13.9876 5.41368L16.3936 3.00768L14.263 1.23443C13.9947 1.01112 13.6548 0.888184 13.3057 0.888184C12.4806 0.888184 11.8093 1.55943 11.8093 2.38456V3.19925C11.8093 5.88525 9.62406 8.0705 6.93806 8.0705C5.05275 8.0705 3.31975 6.96637 2.52306 5.25762L2.29375 4.76587C2.09694 4.34375 1.66887 4.07093 1.20312 4.07093C0.53975 4.07093 0 4.61068 0 5.27425V13.2949H32C31.8321 11.5287 30.3408 10.1423 28.5314 10.1423Z" fill="#388FF3"/>
</svg>
<svg width="32" height="3" viewBox="0 0 32 3" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.361816 0.170654C0.932129 1.31978 2.1175 2.1119 3.485 2.1119H28.5315C29.899 2.1119 31.0844 1.31984 31.6547 0.170654H0.361816Z" fill="#388FF3"/>
</svg>
      </div>

`,
      addsAmount: '4147 объявлений',
      subcategories: [
        {
          subcategoryTitle: "Men's shoes",
          subsubcategories: [
            { subcategoryInnerItem: 'Sneakers' },
            { subcategoryInnerItem: 'Boots' },
          ],
        },
        {
          subcategoryTitle: "Women's shoes",
          subsubcategories: [
            { subcategoryInnerItem: 'Sneakers' },
            { subcategoryInnerItem: 'Boots' },
          ],
        }, // Add more subcategories as needed
      ],
    },
    {
      title: 'Для мужчин',
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.324 24.06L21.216 22.7827L20.7813 21.044C22.148 19.6907 23.084 17.832 23.3613 15.9253C24.1186 15.712 24.7053 15.0626 24.8066 14.248L25.1399 11.5813C25.2106 11.0186 25.0372 10.4493 24.6639 10.0226C24.4452 9.77194 24.1693 9.58263 23.8639 9.46663L23.9866 6.95594L24.4853 6.45594C25.236 5.65725 25.8586 4.28794 24.5573 2.30125C23.5573 0.774688 21.8587 0 19.5067 0C18.5787 0 16.4427 0 14.4534 1.336C8.77331 1.45469 8 4.09331 8 6.66669C8 7.26538 8.14531 8.61337 8.24131 9.42669C7.89862 9.53469 7.588 9.73469 7.34531 10.0107C6.96531 10.4414 6.78931 11.0134 6.86 11.5827L7.19331 14.2494C7.30263 15.1187 7.96263 15.8027 8.79731 15.9654C9.07331 17.7987 9.96131 19.5974 11.2493 20.9281L10.7853 22.7854L5.67731 24.0627C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="#388FF3"/>
</svg>`,
      addsAmount: '547 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Kitchen',
          subsubcategories: [
            { subcategoryInnerItem: 'Ajoyib' },
            { subcategoryInnerItem: 'Havo ' },
          ],
        },
        {
          subcategoryTitle: 'Sitting Room',
          subsubcategories: [
            { subcategoryInnerItem: 'Air-conditioner' },
            { subcategoryInnerItem: 'TV' },
            { subcategoryInnerItem: 'Wi-Fi' },
          ],
        }, // Add more subcategories as needed
      ],
    },
    {
      title: 'Детские товары',
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1202_642)">
    <path d="M31.7498 12.832C31.5239 9.50903 30.1223 6.41577 27.7446 4.03809C25.1406 1.43408 21.6785 0 17.9956 0C17.468 0 17.0405 0.427734 17.0405 0.955322V12.832H31.7498Z" fill="#388FF3"/>
    <path d="M6.11938 12.832V12.1118C6.11938 9.97363 4.37988 8.23413 2.2417 8.23413H1.26782C0.740234 8.23413 0.3125 8.66187 0.3125 9.18945C0.3125 9.71704 0.740234 10.1445 1.26782 10.1445H2.2417C3.32642 10.1445 4.20898 11.0271 4.20898 12.1118V12.832H6.11938Z" fill="#388FF3"/>
    <path d="M26.5811 19.7722C28.1135 19.7722 29.5332 20.2627 30.6926 21.0942C31.5203 19.7703 31.9109 18.2905 31.7827 16.8782V14.7424H4.2085V16.9233C4.2085 18.2273 4.51318 19.4612 5.0542 20.5583C6.02466 20.0564 7.12549 19.7722 8.2915 19.7722C11.6143 19.7722 14.4084 22.0769 15.1609 25.1716H19.7117C20.4641 22.0769 23.2583 19.7722 26.5811 19.7722Z" fill="#388FF3"/>
    <path d="M8.2915 21.6829C5.44702 21.6829 3.13281 23.9968 3.13281 26.8413C3.13281 29.6858 5.44702 32 8.2915 32C11.136 32 13.4502 29.6858 13.4502 26.8413C13.4502 23.9968 11.136 21.6829 8.2915 21.6829ZM8.2915 29.9351C6.58569 29.9351 5.19775 28.5474 5.19775 26.8413C5.19775 25.1355 6.58569 23.7478 8.2915 23.7478C9.99731 23.7478 11.3853 25.1355 11.3853 26.8413C11.3853 28.5474 9.99731 29.9351 8.2915 29.9351Z" fill="#388FF3"/>
    <path d="M8.29175 25.6582C7.63916 25.6582 7.1084 26.189 7.1084 26.8413C7.1084 27.4939 7.63916 28.0247 8.29175 28.0247C8.94434 28.0247 9.4751 27.4939 9.4751 26.8413C9.4751 26.189 8.94409 25.6582 8.29175 25.6582Z" fill="#388FF3"/>
    <path d="M31.7402 26.8413C31.7402 23.9968 29.426 21.6829 26.5815 21.6829C23.7371 21.6829 21.4229 23.9968 21.4229 26.8413C21.4229 29.6858 23.7371 32 26.5815 32C29.426 32 31.7402 29.6858 31.7402 26.8413ZM26.5815 29.9351C24.8757 29.9351 23.4878 28.5474 23.4878 26.8413C23.4878 25.1355 24.8757 23.7478 26.5815 23.7478C28.2874 23.7478 29.6753 25.1355 29.6753 26.8413C29.6753 28.5474 28.2874 29.9351 26.5815 29.9351Z" fill="#388FF3"/>
    <path d="M26.5813 25.6582C25.9287 25.6582 25.3979 26.189 25.3979 26.8413C25.3979 27.4939 25.9287 28.0247 26.5813 28.0247C27.2339 28.0247 27.7646 27.4939 27.7646 26.8413C27.7646 26.189 27.2339 25.6582 26.5813 25.6582Z" fill="#388FF3"/>
  </g>
  <defs>
    <clipPath id="clip0_1202_642">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
      addsAmount: '635 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Entertainment',
          subsubcategories: [
            { subcategoryInnerItem: 'Ball' },
            { subcategoryInnerItem: 'Hockey' },
          ],
        },
        {
          subcategoryTitle: 'Education',
          subsubcategories: [
            { subcategoryInnerItem: 'Books' },
            { subcategoryInnerItem: 'Pen' },
          ],
        }, // Add more subcategories as needed
      ],
    },
    {
      title: 'Здоровье',
      svg: `<svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.9909 3.21824C9.01587 -2.88242 0.14723 2.4778 0.00180337 9.74443C-0.0352563 11.5964 0.499328 13.4003 1.56343 15.0633H8.46066L9.68744 13.0186C10.0437 12.425 10.9057 12.4059 11.2821 12.9977L13.8705 17.0651L17.6435 9.09998C17.9726 8.40497 18.9532 8.38291 19.3161 9.05686L22.5503 15.0633H30.4184C36.2468 5.95403 24.7279 -4.42336 15.9909 3.21824Z" fill="#388FF3"/>
  <path d="M21.1651 16.4451L18.5443 11.5779L14.8382 19.4017C14.5229 20.0673 13.5956 20.1251 13.2002 19.5037L10.5148 15.2838L9.79525 16.4829C9.62582 16.7653 9.32072 16.938 8.99143 16.938H3.04639C3.23275 17.1331 2.23951 16.1418 15.3297 29.1642C15.6953 29.528 16.2863 29.5281 16.652 29.1642C29.5407 16.3422 28.7493 17.1327 28.9353 16.938H21.9904C21.6455 16.9381 21.3286 16.7487 21.1651 16.4451Z" fill="#388FF3"/>
</svg>`,
      addsAmount: '243 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Smartphone',
          subsubcategories: [
            { subcategoryInnerItem: 'Iphone' },
            { subcategoryInnerItem: 'Samsung' },
          ],
        },
        {
          subcategoryTitle: 'Accessory',
          subsubcategories: [
            { subcategoryInnerItem: 'Earphone' },
            { subcategoryInnerItem: 'Headphone' },
          ],
        }, // Add more subcategories as needed
      ],
    },
    {
      title: 'Сумки',
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1202_70)">
    <path d="M22.6999 4.8H20.2999V2.4C20.2984 1.0752 19.225 0.0015 17.8999 0H13.0999C11.7751 0.0015 10.7014 1.0752 10.6999 2.4V4.8H8.29989C6.09182 4.80232 4.3024 6.59174 4.3 8.79989V13.5999C4.3015 14.925 5.3752 15.9984 6.69999 15.9999H10.6999V15.2001C10.6999 14.7583 11.0582 14.4 11.5 14.4C11.9418 14.4 12.3001 14.7583 12.3001 15.2001V15.9999H18.7V15.2001C18.7 14.7583 19.0583 14.4 19.5001 14.4C19.9419 14.4 20.2999 14.7583 20.2999 15.2001V15.9999H24.3001C25.6249 15.9984 26.6986 14.925 26.7001 13.5999V8.79989C26.6978 6.59182 24.9083 4.8024 22.6999 4.8ZM18.7 4.8H12.3001V2.4C12.3007 1.95847 12.6584 1.6005 13.0999 1.5999H17.8999C18.3416 1.6005 18.6994 1.95847 18.7 2.4V4.8ZM29.1001 19.2H28.3V27.9999C28.2918 28.2435 28.2672 28.4862 28.2265 28.7265C30.1208 28.3764 31.4963 26.7261 31.5001 24.8001V21.6C31.4986 20.2752 30.4249 19.2015 29.1001 19.2ZM2.7001 19.2H1.9C0.575199 19.2015 -0.4985 20.2752 -0.5 21.6V24.8001C-0.496475 26.7261 0.879249 28.3764 2.77337 28.7265C2.73285 28.4862 2.70837 28.2434 2.7001 27.9999V19.2ZM20.2999 17.6001V20.0001C20.2999 20.4418 19.9419 20.7999 19.5001 20.7999C19.0583 20.7999 18.7 20.4419 18.7 20.0001V17.6001H12.3001V20.0001C12.3001 20.4418 11.9418 20.7999 11.5 20.7999C11.0582 20.7999 10.6999 20.4419 10.6999 20.0001V17.6001H6.69999C5.8317 17.5971 4.98844 17.3089 4.3 16.7797V27.9999C4.30232 30.2083 6.09174 31.9978 8.29989 32.0001H22.6999C24.9083 31.9978 26.6978 30.2083 26.7001 27.9999V16.7797C26.0116 17.3088 25.1684 17.5971 24.3001 17.6001H20.2999Z" fill="#388FF3"/>
  </g>
  <defs>
    <clipPath id="clip0_1202_70">
      <rect width="32" height="32" fill="white" transform="translate(-0.5)"/>
    </clipPath>
  </defs>
</svg>`,
      addsAmount: '6337 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Tools',
          subsubcategories: [
            { subcategoryInnerItem: 'Kindle' },
            { subcategoryInnerItem: 'Calculator' },
          ],
        },
        {
          subcategoryTitle: 'Books',
          subsubcategories: [
            { subcategoryInnerItem: 'Make it happen' },
            { subcategoryInnerItem: 'Sleepy' },
          ],
        }, // Add more subcategories as needed
      ],
    }, // Add more data as needed
  ]

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

  categoryList.innerHTML = generateCategoryCards(jsonData)

  const backButton = document.querySelectorAll('.dropdown-menu__back-title')
  const categoryMenuItem = document.querySelectorAll('.category-menu__item')
  const categoryMenuItem1 = document.querySelectorAll('.category-links')
  const categoryLinkItems = document.querySelectorAll('.category-links__item')

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
  for (let i = 0; i < categoryLinkItems.length; i++) {
    categoryLinkItems[i].addEventListener('click', function (e) {
      e.stopImmediatePropagation()
      const categoryGroup = e.target.closest('.category-group')
      const categoryDropDown = e.target.closest('.category-links')
      categoryGroup.style.marginBottom = `${categoryDropDown.offsetHeight}px`
      categoryMenuItem1[i].classList.remove('active')
    })
  }
})
