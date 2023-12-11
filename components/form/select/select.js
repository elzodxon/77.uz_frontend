
// Function to generate a unique ID for select menus
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to set up a select menu
function setupSelectMenu(selectMenu) {
  const selectBtn = selectMenu.querySelector('.select-btn');
  const options = selectMenu.querySelectorAll('.option');
  const selectContext = selectMenu.querySelector('.select-menu__context');

  selectBtn.addEventListener('click', () => selectMenu.classList.toggle('active'));

  options.forEach((option) => {
    option.addEventListener('click', () => {
      options.forEach((otherOption) => {
        if (otherOption !== option) {
          otherOption.classList.remove('selected-option');
        }
      });

      let selectedOption = option.querySelector('.option-text').innerText;
      selectContext.innerText = selectedOption;
      option.classList.add('selected-option');

      selectMenu.classList.remove('active');
    });
  });
}

// Generate unique IDs and set up select menus
document.querySelectorAll('.select-menu').forEach((selectMenu) => {
  const uniqueId = generateUniqueId();
  selectMenu.setAttribute('id', uniqueId);
  setupSelectMenu(selectMenu);
});