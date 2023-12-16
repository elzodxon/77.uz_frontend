//  MAIN SEARCH
const blocker = document.querySelector('.blocker')
const searchInput = document.getElementById('searchNow')
const searchSuggestion = document.getElementById('search-suggestion')
const searchSuggestionList = document.querySelector('.search-suggestion__list')
const searchWrapper = document.querySelector('.search-wrapper')

// WHEN SEARCHINPUT IS FOCUSED ,  ADD BLOCKER TO BODY
searchInput.addEventListener('focus', (e) => {
  e.preventDefault()
  blocker.classList.toggle('active')
  document.body.classList.toggle('block')
  searchWrapper.classList.toggle('active')
})

blocker.addEventListener('click', () => {
  document.body.classList.remove('block')
  blocker.classList.remove('active')
  searchSuggestion.classList.remove('active')
  searchWrapper.classList.toggle('active')
})

/////////------SEARCH SUGGESTION-------///////

// Attach event listener to the search input
searchInput.addEventListener('input', handleSearchInput)

/* Handle search inputs  */
function handleSearchInput() {
  searchInput.classList.toggle('active')
  if(searchInput.value.trim() !== "") {
    searchSuggestion.classList.add("active")
  }
  // call searchTerm when searchInput is inputted
  const searchTerm = searchInput.value.trim().toLowerCase()

  // Update "top-txt" value
  const topTxt = document.querySelector('.top-txt')
  topTxt.textContent = 'Рекомендации'

  // If search input is empty, show 'no history'
  if (searchTerm === '') {
    searchSuggestionList.innerHTML =
      "<li class='search-suggestion__item' style='background-color: #fff;cursor:default;color:var(--black-color);'>No history</li>"
    topTxt.textContent = 'История поиска'

    return
  }

  // Check if there are matches in jsonData
  const matches = getMatchingValues(searchTerm)
  displaySearchResults(matches)
}

function getMatchingValues(searchTerm) {
  const matches = []

  // Check for matches in jsonData
  jsonData.forEach((category) => {
    if (category.name.toLowerCase().includes(searchTerm)) {
      matches.push(category.name)
    }
    if (category.childs) {
      category.childs.forEach((child) => {
        if (child.name.toLowerCase().includes(searchTerm)) {
          matches.push(child.name)
        }
        if (child.childs) {
          child.childs.forEach((subChild) => {
            if (subChild.name.toLowerCase().includes(searchTerm)) {
              matches.push(subChild.name)
            }
          })
        }
      })
    }
  })

  return matches
}

function displaySearchResults(matches) {
  if (matches.length > 0) {
    searchSuggestionList.innerHTML = `${matches
      .map(
        (match) => `
          <li class="search-suggestion__item">
        <a class="suggestion-link" href="/pages/productList/ProductList.html">
        <span>
        <i class="icon-search"></i>
        <span>
          ${highlightMatch(match)}
          </span>
          <span>
          <i class="right-icon icon-cheveron-right"></i>
  </span>

        </a>
        </li>

  `,
      )
      .join('')}`
  } else {
    searchSuggestionList.innerHTML = `
      <div class="search-error" style="cursor: default;">
      <img src="/assets/img/category/search-error.svg" alt="" width="120" height="107">
      <h3 class="nothing-found">Ничего не найдено</h3>
      <span class="cant-find">Упс! Мы не смогли найти ни одного <br> подходящего результата по вашему запросу</span>
      </div>
      `
  }
}

function highlightMatch(value) {
  const searchTerm = searchInput.value.trim()
  const regex = new RegExp(searchTerm, 'gi')

  return value.replace(
    regex,
    (match) => `<span class="matching-letters" >${match}</span>`,
  )
}
