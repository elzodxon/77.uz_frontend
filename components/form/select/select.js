<<<<<<< HEAD
=======
// Function to generate a unique ID for select menus
>>>>>>> 3cd576d9899a85cc243d1dfd4b44752b02e8e845
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9)
}

// Function to set up a select menu
function setupSelectMenu(selectMenu) {
<<<<<<< HEAD
  const selectBtn = selectMenu.querySelector('.select-btn');
  const optionsContainer = selectMenu.querySelector('.options');
  const selectContext = selectMenu.querySelector('.select-menu__context');

  let allOptions = []; // Variable to store all options from the fake JSON dataset

  // Fake JSON dataset with only option values
  const fakeJsonData = ['Г. Ташкент', 'Андижан', 'Бухара', 'Навои', 'Самарканд', 'Джизак'];

  // Function to render options in the options container using <li> tags
  function renderOptions(options) {
    optionsContainer.innerHTML = '';

    options.forEach((option) => {
      const li = document.createElement('li');
      li.classList.add('option');
      li.innerHTML = `<span class="option-text">${option}</span>`;
      optionsContainer.appendChild(li);
    });
  }

  // Toggle active class on select button click
  selectBtn.addEventListener('click', () => {
    selectMenu.classList.toggle('active');
    // Render options when the select menu is opened
    if (selectMenu.classList.contains('active')) {
      renderOptions(allOptions);
    }
  });
=======
  const selectBtn = selectMenu.querySelector('.select-btn')
  const options = selectMenu.querySelectorAll('.option')
  const selectContext = selectMenu.querySelector('.select-menu__context')

  selectBtn.addEventListener('click', () =>
    selectMenu.classList.toggle('active'),
  )

  options.forEach((option) => {
    option.addEventListener('click', () => {
      options.forEach((otherOption) => {
        if (otherOption !== option) {
          otherOption.classList.remove('selected-option')
        }
      })

      let selectedOption = option.querySelector('.option-text').innerText
      selectContext.innerText = selectedOption
      option.classList.add('selected-option')

      selectMenu.classList.remove('active')
    })
  })
>>>>>>> 3cd576d9899a85cc243d1dfd4b44752b02e8e845

  // Close the select menu when clicking outside
  window.addEventListener('click', (event) => {
    if (
      !selectMenu.contains(event.target) &&
      !event.target.matches('.select-btn')
    ) {
      selectMenu.classList.remove('active')
    }
<<<<<<< HEAD
  });

  // Handle option selection (delegate to options container)
  optionsContainer.addEventListener('click', (event) => {
    const li = event.target.closest('.option');
    if (li) {
      optionsContainer.querySelectorAll('.option').forEach((otherOption) => {
        otherOption.classList.remove('selected-option');
      });

      let selectedOption = li.querySelector('.option-text').innerText;
      selectContext.innerText = selectedOption;
      li.classList.add('selected-option');
      selectMenu.classList.remove('active');
    }
  });

  // Store options from the fake JSON dataset
  allOptions = fakeJsonData;
=======
  })
>>>>>>> 3cd576d9899a85cc243d1dfd4b44752b02e8e845
}

// Generate unique IDs and set up select menus
document.querySelectorAll('.select-menu').forEach((selectMenu) => {
  const uniqueId = generateUniqueId()
  selectMenu.setAttribute('id', uniqueId)
  setupSelectMenu(selectMenu)
})
