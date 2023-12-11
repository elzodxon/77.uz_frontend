const optionMenu = document.querySelector('.select-menu'),
  selectBtn = optionMenu.querySelector('.select-menu__btn'),
  options = optionMenu.querySelectorAll('.option'),
  selectContext = optionMenu.querySelector('.select-menu__context')

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'))

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

    optionMenu.classList.remove('active')
  })
})
