const searchInput = document.querySelector('.search__input');

const favoriteProductButton = document.querySelectorAll(
  '.favorite__product-button'
);
const favoriteProductPath = document.querySelectorAll('.favorite-path');

searchInput.addEventListener('focus', (e) => {
  e.preventDefault();
  blocker.classList.toggle('active');
  document.body.classList.toggle('block');
});

for (let i = 0; i < favoriteProductButton.length; i++) {
  favoriteProductButton[i].addEventListener('click', () => {
    favoriteProductPath[i].classList.toggle('active');
  });
}

searchInput.addEventListener('focus', (e) => {
  e.preventDefault();
  blocker.classList.add('active');
  document.body.classList.add('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const categoryList = document.getElementById('categoryList');

  const jsonData = [
    {
      title: 'Для женщин',
      addsAmount: '4147 объявлений',
      svgImage: `
      
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_606_9837)">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_606_9837">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

      `,
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { samsung: 'example-link-1' },
            { iphone: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { headphones: 'example-link-3' },
            { bags: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Для женщин',
      addsAmount: '4147 объявлений',
      svgImage: `
      
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_606_9837)">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_606_9837">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

      `,
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { samsung: 'example-link-1' },
            { iphone: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { headphones: 'example-link-3' },
            { bags: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Для женщин',
      addsAmount: '4147 объявлений',
      svgImage: `
      
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_606_9837)">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_606_9837">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

      `,
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { samsung: 'example-link-1' },
            { iphone: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { headphones: 'example-link-3' },
            { bags: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Для женщин',
      addsAmount: '4147 объявлений',
      svgImage: `
      
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_606_9837)">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_606_9837">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

      `,
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { samsung: 'example-link-1' },
            { iphone: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { headphones: 'example-link-3' },
            { bags: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Для женщин',
      addsAmount: '4147 объявлений',
      svgImage: `
      
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_606_9837)">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_606_9837">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

      `,
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { samsung: 'example-link-1' },
            { iphone: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { headphones: 'example-link-3' },
            { bags: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Для женщин',
      addsAmount: '4147 объявлений',
      svgImage: `
      
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_606_9837)">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_606_9837">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

      `,
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { samsung: 'example-link-1' },
            { iphone: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { headphones: 'example-link-3' },
            { bags: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Для женщин',
      addsAmount: '4147 объявлений',
      svgImage: `
      
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_606_9837)">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_606_9837">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

      `,
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { samsung: 'example-link-1' },
            { iphone: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { headphones: 'example-link-3' },
            { bags: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    // Add more data as needed
  ];

  function generateSubsubcategoryLinks(subsubcategories) {
    return subsubcategories
      .map((subsub) => {
        const subsubTitle = Object.keys(subsub)[0];
        const subsubLink = subsub[subsubTitle];
        return `<li class="category-links__item">${subsubLink}</li>`;
      })
      .join('');
  }

  function generateSubcategoryLinks(subcategories) {
    return subcategories
      .map((subcategory) => {
        const subcategoryTitle = subcategory.subcategoryTitle;
        const subsubcategoryLinks = generateSubsubcategoryLinks(
          subcategory.subsubcategories
        );

        return `
        <li class="category-menu__item">
          <span class="category-menu__title">
            <span>${subcategoryTitle}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6L12 10L8 14" stroke="#B8BBBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <div class="category-links">
            <div class="dropdown-menu__back-title">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1998 22.4L12.7998 16L19.1998 9.60003" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <button class="dropdown-menu__back">back</button>
            </div>
            <ul class="category-links__menu">${subsubcategoryLinks}</ul>
          </div>
        </li>
      `;
      })
      .join('');
  }

  function generateCategoryCards(categories) {
    return categories
      .map((category) => {
        const categoryCard = `
        <li class="category-group" role="button">
          <div class="category-card">
            <div class="category-icon">
              ${category.svgImage}
            </div>
            <div class="category-card__text">
              <div class="category-card__description">
                <h2 class="category-name">${category.title}</h2>
                <p class="adds-amount">${category.addsAmount}</p>
              </div>
              <svg class="category-revealer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6L12 10L8 14" stroke="#B8BBBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <ul class="category-menu">${generateSubcategoryLinks(
            category.subcategories
          )}</ul>
        </li>
      `;
        return categoryCard;
      })
      .join('');
  }

  const windowWidth = window.innerWidth;
  console.log(`Window Width: ${windowWidth}px`);

  categoryList.innerHTML = generateCategoryCards(jsonData);

  const backButton = document.querySelectorAll('.dropdown-menu__back');
  const categoryMenuItem = document.querySelectorAll('.category-menu__item');
  const categoryMenuItem1 = document.querySelectorAll('.category-links');

  const categoryGroups = document.querySelectorAll('.category-card');
  const categoryDropdowns = document.querySelectorAll('.category-menu');

  for (let i = 0; i < categoryGroups.length; i++) {
    categoryGroups[i].addEventListener('click', function () {
      categoryDropdowns[i].classList.toggle('active');
    });
  }

  for (let i = 0; i < categoryMenuItem.length; i++) {
    categoryMenuItem[i].addEventListener('click', function () {
      categoryMenuItem1[i].classList.toggle('active');
    });
  }
  for (let i = 0; i < backButton.length; i++) {
    backButton[i].addEventListener('click', function (e) {
      e.stopPropagation();
      categoryMenuItem1[i].classList.remove('active');
    });
  }
});

