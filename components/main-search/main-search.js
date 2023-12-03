//  MAIN SEARCH
const blocker = document.querySelector('.blocker');
  const searchInput = document.getElementById('searchNow');

searchInput.addEventListener('focus', (e) => {e.preventDefault();
  blocker.classList.toggle('active');
  searchSuggestion.classList.toggle('active');
  document.body.classList.toggle('block');
});

blocker.addEventListener('click', () => {
  document.body.classList.remove('block');
  blocker.classList.remove('active');
  searchSuggestion.classList.remove('active');
});
const jsonData = [
  {
    id: 25,
    name: 'Mобильные телефоны',
    ads_count: 54,
    icon: null,
    childs: [
      {
        id: 44,
        name: 'smartphone ru',
        childs: [
          {
            id: 40,
            name: 'Samsung',
          },
          {
            id: 41,
            name: 'IPhone',
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: 'Для женщин',
    ads_count: 8,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD_gOhqhpL.png',
    childs: [
      {
        id: 29,
        name: 'Сумки и чемоданы',
      },
      {
        id: 26,
        name: 'Личная гигиена',
      },
      {
        id: 23,
        name: 'Аксессуары',
        childs: [
          {
            id: 39,
            name: 'Часы Касио i360',
          },
        ],
      },
      {
        id: 24,
        name: 'Канцелярия',
      },
      {
        id: 27,
        name: 'Автотовары',
      },
      {
        id: 32,
        name: 'Красота',
      },
    ],
  },
  {
    id: 38,
    name: 'Спорт и отдых',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%A1%D0%BF%D0%BE%D1%80%D1%82_%D0%B8_%D0%BE%D1%82%D0%B4%D1%8B%D1%85.png',
    childs: [],
  },
  {
    id: 45,
    name: 'Сумка',
    ads_count: 2,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_n788dr7.svg',
    childs: [
      {
        id: 46,
        name: 'Женские сумки',
        childs: [
          {
            id: 47,
            name: 'Gucci',
          },
        ],
      },
    ],
  },
  {
    id: 35,
    name: 'Бытовая техника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%9C%D0%B0%D0%B8%D1%88%D0%B8%D0%B9_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [],
  },
  {
    id: 37,
    name: 'Электроника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [
      {
        id: 28,
        name: 'Домашняя утварь',
      },
      {
        id: 42,
        name: 'Ноутбуки',
      },
    ],
  },
  {
    id: 36,
    name: 'Здоровье',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5.png',
    childs: [],
  },
  {
    id: 30,
    name: 'Для мужчин',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD.png',
    childs: [
      {
        id: 31,
        name: 'Здоровье',
      },
      {
        id: 34,
        name: 'Мототранспорт',
      },
      {
        id: 33,
        name: 'Новые легковые автомобили',
      },
    ],
  },
  {
    id: 48,
    name: 'Детские товари',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/icons8-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%8B-48.png',
    childs: [
      {
        id: 49,
        name: 'Для малчиков',
        childs: [
          {
            id: 53,
            name: 'Брюки',
          },
        ],
      },
    ],
  },
  {
    id: 25,
    name: 'Mобильные телефоны',
    ads_count: 54,
    icon: null,
    childs: [
      {
        id: 44,
        name: 'smartphone ru',
        childs: [
          {
            id: 40,
            name: 'Samsung',
          },
          {
            id: 41,
            name: 'IPhone',
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: 'Для женщин',
    ads_count: 8,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD_gOhqhpL.png',
    childs: [
      {
        id: 29,
        name: 'Сумки и чемоданы',
      },
      {
        id: 26,
        name: 'Личная гигиена',
      },
      {
        id: 23,
        name: 'Аксессуары',
        childs: [
          {
            id: 39,
            name: 'Часы Касио i360',
          },
        ],
      },
      {
        id: 24,
        name: 'Канцелярия',
      },
      {
        id: 27,
        name: 'Автотовары',
      },
      {
        id: 32,
        name: 'Красота',
      },
    ],
  },
  {
    id: 38,
    name: 'Спорт и отдых',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%A1%D0%BF%D0%BE%D1%80%D1%82_%D0%B8_%D0%BE%D1%82%D0%B4%D1%8B%D1%85.png',
    childs: [],
  },
  {
    id: 45,
    name: 'Сумка',
    ads_count: 2,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_n788dr7.svg',
    childs: [
      {
        id: 46,
        name: 'Женские сумки',
        childs: [
          {
            id: 47,
            name: 'Gucci',
          },
        ],
      },
    ],
  },
  {
    id: 35,
    name: 'Бытовая техника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%9C%D0%B0%D0%B8%D1%88%D0%B8%D0%B9_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [],
  },
  {
    id: 37,
    name: 'Электроника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [
      {
        id: 28,
        name: 'Домашняя утварь',
      },
      {
        id: 42,
        name: 'Ноутбуки',
      },
    ],
  },
  {
    id: 36,
    name: 'Здоровье',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5.png',
    childs: [],
  },
  {
    id: 30,
    name: 'Для мужчин',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD.png',
    childs: [
      {
        id: 31,
        name: 'Здоровье',
      },
      {
        id: 34,
        name: 'Мототранспорт',
      },
      {
        id: 33,
        name: 'Новые легковые автомобили',
      },
    ],
  },
  {
    id: 48,
    name: "Детские товари kids' products",
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/icons8-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%8B-48.png',
    childs: [
      {
        id: 49,
        name: 'Для малчиков for boys',
        childs: [
          {
            id: 53,
            name: 'Брюки shoes',
          },
        ],
      },
    ],
  }

]

/////////------SEARCH SUGGESTION-------///////

const searchSuggestion = document.getElementById('m-search-suggestion')
  const mSearchSuggestionList = document.querySelector(
    '.m-search-suggestion__list',
  )

// Attach event listener to the search input
searchInput.addEventListener("input", handleSearchInput);

function handleSearchInput() {
   searchInput.classList.toggle('active')
  const searchTerm = searchInput.value.trim().toLowerCase();
  const suggestionList = document.querySelector(".m-search-suggestion__list");
    // Update "top-txt" value
    const topTxt = document.querySelector(".top-txt");
    topTxt.textContent = "Рекомендации";
  // If search input is empty
  if (searchTerm === "") {
    suggestionList.innerHTML = "<li class='m-search-suggestion__item' style='background-color: #fff;cursor:default'>No history</li>";
    topTxt.textContent = "История поиска";
    return;
  }
  // Check if there are matches in jsonData
  const matches = getMatchingValues(searchTerm);
  displaySearchResults(matches);
}

function getMatchingValues(searchTerm) {
  const matches = [];
  // Check for matches in jsonData
  jsonData.forEach((category) => {
    if (category.name.toLowerCase().includes(searchTerm)) {
      matches.push(category.name);
    }
    if (category.childs) {
      category.childs.forEach((child) => {
        if (child.name.toLowerCase().includes(searchTerm)) {
          matches.push(child.name);
        }
        if (child.childs) {
          child.childs.forEach((subChild) => {
            if (subChild.name.toLowerCase().includes(searchTerm)) {
              matches.push(subChild.name);
            }
          });
        }
      });
    }
  });
  return matches;
}

function displaySearchResults(matches) {
  const suggestionList = document.querySelector(".m-search-suggestion__list");

  if (matches.length > 0) {
    suggestionList.innerHTML = `${matches
      .map((match) => `<li class="m-search-suggestion__item">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1057 14.2L17 17M16.0667 9.53333C16.0667 13.1416 13.1416 16.0667 9.53333 16.0667C5.92507 16.0667 3 13.1416 3 9.53333C3 5.92507 5.92507 3 9.53333 3C13.1416 3 16.0667 5.92507 16.0667 9.53333Z" stroke="#388FF3" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      ${highlightMatch(match)}
      <svg class="right-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5999 7.19995L14.3999 12L9.5999 16.8" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></li>

`)
      .join("")}`;
  } else {
    suggestionList.innerHTML = `
    <div class="search-error" style="cursor: default;">
    <img src="/assets/img/category/search-error.svg" alt="" width="120" height="107">
    <h3 class="nothing-found">Ничего не найдено</h3>
    <span class="cant-find">Упс! Мы не смогли найти ни одного <br> подходящего результата по вашему запросу</span>
    </div>
    `;
  }
}

function highlightMatch(value) {
  const searchTerm = searchInput.value.trim();
  const regex = new RegExp(searchTerm, "gi");
  return value.replace(regex, (match) => `<span class="matching-letters" >${match}</span>`);
}
