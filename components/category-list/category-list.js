// MAIN SEARCH
const searchInput = document.querySelector('.search__input');
const blocker = document.querySelector('.blocker');
const favoriteProductButton = document.querySelectorAll(
  '.favorite__product-button'
);
const favoriteProductPath = document.querySelectorAll('.favorite-path');
const searchSuggestion = document.getElementById('m-search-suggestion');

for (let i = 0; i < favoriteProductButton.length; i++) {
  favoriteProductButton[i].addEventListener('click', () => {
    favoriteProductPath[i].classList.toggle('active');
  });
}

searchInput.addEventListener('focus', (e) => {
  e.preventDefault();
  blocker.classList.toggle('active');
  searchSuggestion.classList.toggle('active')
  document.body.classList.toggle('block');
});
blocker.addEventListener('click', () => {
  document.body.classList.remove('block');
  blocker.classList.remove('active');
  searchSuggestion.classList.remove('active')
});

//CATEGORY
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(function(card) {
    card.addEventListener('click', function() {
      // Remove "active" class from all category cards
      categoryCards.forEach(function(c) {
        c.classList.remove('active');
      });
      // Add "active" class to the clicked category card
      card.classList.add('active');
    });
  });
;
//---------CATEGORY LIST----------///////////
document.addEventListener('DOMContentLoaded', function () {
  const categoryList = document.getElementById('category-list');

  const jsonData = [
    {
      title: 'Electronics',
      addsAmount: '4147 объявлений',
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
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'For men',
      addsAmount: '4147 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { subcategoryInnerItem: 'example-link-1' },
            { subcategoryInnerItem: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { subcategoryInnerItem: 'example-link-3' },
            { subcategoryInnerItem: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'For women',
      addsAmount: '4147 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Смартфоны',
          subsubcategories: [
            { subcategoryInnerItem: 'example-link-1' },
            { subcategoryInnerItem: 'example-link-2' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { subcategoryInnerItem: 'example-link-3' },
            { subcategoryInnerItem: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Smart Home',
      addsAmount: '4147 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Smart Kitchen tools',
          subsubcategories: [
            { subcategoryInnerItem: 'Ember Temperature Control Smart Mug' },
            { subcategoryInnerItem: 'Instant Pot Air Fryer Lid 6 in 1' },
          ],
        },
        {
          subcategoryTitle: 'Аксессуары',
          subsubcategories: [
            { subcategoryInnerItem: 'example-link-3' },
            { subcategoryInnerItem: 'example-link-4' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Computers',
      addsAmount: '4147 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Laptops',
          subsubcategories: [
            { subcategoryInnerItem: 'Acer Aspire 3' },
            { subcategoryInnerItem: 'MacMini' },
          ],
        },
        {
          subcategoryTitle: 'Monitors',
          subsubcategories: [
            { subcategoryInnerItem: 'LG Monitors' },
            { subcategoryInnerItem: 'Samsung Monitors' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'For Children',
      addsAmount: '4147 объявлений',
      subcategories: [
        {
          subcategoryTitle: 'Clothes',
          subsubcategories: [
            { subcategoryInnerItem: "Jacket" },
            { subcategoryInnerItem: 'Cap' },
          ],
        },
        {
          subcategoryTitle: 'Entertainment',
          subsubcategories: [
            { subcategoryInnerItem: 'Ball' },
            { subcategoryInnerItem: 'Bicycle' },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    {
      title: 'Furniture',
      addsAmount: '4147 объявлений',
      subcategories: [
        {
          subcategoryTitle: "Kids' furniture",
          subsubcategories: [
            { subcategoryInnerItem: 'Bed' },
            { subcategoryInnerItem: 'Table'}
          ],
        },
        {
          subcategoryTitle: 'Sitting Room',
          subsubcategories: [
            { subcategoryInnerItem: 'Chair' },
            { subcategoryInnerItem: 'Sofa' },
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
                           <button class="dropdown-menu__back">${subcategoryTitle}</button>
                       </div>
                       <ul><a class="category-links__menu" href="#">${subsubcategoryLinks}</a></ul>
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
};

///////////------SEARCH SUGGESTION-------///////
const searchInput = document.getElementById('searchNow');
const searchSuggestion = document.getElementById('m-search-suggestion');
const mSearchSuggestionTitle = document.querySelector('.m-search-suggestion-title');

// SEARCH
function generateSearchSuggestion(inputValue) {
   const inputValueLowerCase = inputValue.toLowerCase();

   const exactMatch = jsonData.find(category => category.title.toLowerCase() === inputValueLowerCase);
   if (exactMatch) {
       return `<div class="m-search-suggestion__card"><h3 class="m-search-suggestion__title">${exactMatch.title}</h3></div>`;
   }

    const partialMatches = jsonData.filter(category => {
       const categoryTitle = category.title.toLowerCase();
       const subcategoryTitles = category.subcategories.map(subcategory => subcategory.subcategoryTitle.toLowerCase());
       const subsubcategoryTitles = category.subcategories.flatMap(subcategory => subcategory.subsubcategories.map(item => Object.values(item)[0].toLowerCase()));
       return [categoryTitle, ...subcategoryTitles, ...subsubcategoryTitles].some(title => title.includes(inputValueLowerCase));
   });

   if (partialMatches.length > 0) {
       return partialMatches.map(category => {
           const categoryTitle = category.title;
           return `
           <div class="m-search-suggestion__card">
           <h3 class="m-search-suggestion__title">
           ${highlightMatchingLetters(categoryTitle, inputValue)}
           </h3></div>`;
       })
       .join('');
   }

   return `<div class="m-search-suggestion__card" style="cursor: default">
               <div class="search-error">
                   <img src="/assets/img/category/search-error.svg" alt="" width="120" height="107">
                   <h4>Ничего не найдено</h4>
                   <p>Упс! Мы не смогли найти ни одного подходящего результата по вашему запросу</p>
               </div>
           </div>`;
}

// SEARCH INPUT EVENT LISTENER
searchInput.addEventListener('input', function () {
   const inputValue = searchInput.value.trim();
   const searchSuggestions = generateSearchSuggestion(inputValue);

   searchSuggestion.innerHTML = searchSuggestions;
   searchSuggestion.classList.toggle('active', inputValue.length > 0 && searchSuggestions.length > 0);
});

// UPDATE SEARCH SUGGESTION TITLE
function updateSearchSuggestionTitle() {
   const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
   if (searchHistory.length === 0) {
       mSearchSuggestionTitle.textContent = 'No History';
   } else {
       mSearchSuggestionTitle.textContent = 'История поиска';
   }
}
updateSearchSuggestionTitle();

// SAVE SEARCH HISTORY
function saveSearchHistory(searchTerm) {
   const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
   searchHistory.unshift(searchTerm);
   localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}
saveSearchHistory();

// HIGHLIGHT MATCHING LETTERS
function highlightMatchingLetters(title, inputValue) {
   const lowerCaseTitle = title.toLowerCase();
   const lowerCaseInput = inputValue.toLowerCase();
   const matchStart = lowerCaseTitle.indexOf(lowerCaseInput);

   if (matchStart === -1) {
       return title;
   }

   const matchEnd = matchStart + lowerCaseInput.length;
   const highlightedPart = title.substring(0, matchStart) +
                           `<span style="background-color: yellow;">${title.substring(matchStart, matchEnd)}</span>` +
                           title.substring(matchEnd);

   return highlightedPart;
}
})
