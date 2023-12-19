function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9)
}

// Function to set up a select menu
function setupSelectMenu(selectMenu) {
  const selectBtn = selectMenu.querySelector('.select-btn')
  const optionsContainer = selectMenu.querySelector('.options')
  const selectContext = selectMenu.querySelector('.select-menu__context')

  let allOptions = [] // Variable to store all options from the fake JSON dataset

  // Fake JSON dataset with objects containing name and isChecked properties
  const fakeJsonData = [
    { name: 'Г. Ташкент', isChecked: false },
    { name: 'Андижан', isChecked: false },
    { name: 'Бухара', isChecked: false },
    { name: 'Навои', isChecked: false },
    { name: 'Самарканд', isChecked: false },
    { name: 'Джизак', isChecked: false },
  ]

  // Function to render options in the options container using <li> tags
  function renderOptions(options) {
    optionsContainer.innerHTML = ''

    options.forEach((option, index) => {
      const li = document.createElement('li')
      li.classList.add('option')
      li.innerHTML = `<span class="option-text">${option.name}</span>`
      li.addEventListener('click', () => handleOptionClick(index))
      optionsContainer.appendChild(li)
    })

    // Add selected-option class to the selected option
    const selectedOptionIndex = options.findIndex((option) => option.isChecked)
    if (selectedOptionIndex !== -1) {
      optionsContainer.children[selectedOptionIndex].classList.add(
        'selected-option',
      )
    }
  }

  // Handle option click
  function handleOptionClick(clickedIndex) {
    allOptions.forEach((option, index) => {
      option.isChecked = index === clickedIndex
    })

    renderOptions(allOptions)
    updateSelectContext()
  }

  // Update select context based on checked option
  function updateSelectContext() {
    const checkedOption = allOptions.find((option) => option.isChecked)
    if (checkedOption) {
      selectContext.innerText = checkedOption.name
    }
  }

  // Toggle active class on select button click
  selectBtn.addEventListener('click', () => {
    selectMenu.classList.toggle('active')

    // Check if options are already rendered before rendering them again
    if (
      selectMenu.classList.contains('active') &&
      optionsContainer.children.length === 0
    ) {
      renderOptions(allOptions)
    }
  })

  // Close the select menu when clicking outside
  window.addEventListener('click', (event) => {
    if (
      !selectMenu.contains(event.target) &&
      !event.target.matches('.select-btn')
    ) {
      selectMenu.classList.remove('active')
    }
  })

  // Store options from the fake JSON dataset
  allOptions = fakeJsonData

  // Initialize the select context based on the initial state
  updateSelectContext()
}

// Generate unique IDs and set up select menus
document.querySelectorAll('.select-menu').forEach((selectMenu) => {
  const uniqueId = generateUniqueId()
  selectMenu.setAttribute('id', uniqueId)
  setupSelectMenu(selectMenu)
})
