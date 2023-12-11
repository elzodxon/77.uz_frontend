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
  searchSuggestion.classList.toggle('active')
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

  // call searchTerm when searchInput is inputted
  const searchTerm = searchInput.value.trim().toLowerCase()

  // Update "top-txt" value
  const topTxt = document.querySelector('.top-txt')
  topTxt.textContent = 'Рекомендации'

  // If search input is empty, show 'no history'
  if (searchTerm === '') {
    searchSuggestionList.innerHTML =
      "<li class='search-suggestion__item' style='background-color: #fff;cursor:default'>No history</li>"
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
        <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1057 14.2L17 17M16.0667 9.53333C16.0667 13.1416 13.1416 16.0667 9.53333 16.0667C5.92507 16.0667 3 13.1416 3 9.53333C3 5.92507 5.92507 3 9.53333 3C13.1416 3 16.0667 5.92507 16.0667 9.53333Z" stroke="#388FF3" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>
          ${highlightMatch(match)}
          </span>
          <span>
          <svg class="right-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.5999 7.19995L14.3999 12L9.5999 16.8" stroke="#B8BBBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
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
