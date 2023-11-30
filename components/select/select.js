const optionMenu = document.querySelector('.select-menu'),
<<<<<<< HEAD
  selectBtn = optionMenu.querySelector('.select-btn'),
  options = optionMenu.querySelectorAll('.option'),
  sBtn_text = optionMenu.querySelector('.sBtn-text')
=======
  selectBtn = optionMenu.querySelector('.select-menu__btn'),
  options = optionMenu.querySelectorAll('.option'),
  selectContext = optionMenu.querySelector('.select-menu__context')
>>>>>>> 3169804508a076c801217ed22bc20c546a1fe26b

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'))

options.forEach((option) => {
  option.addEventListener('click', () => {
<<<<<<< HEAD
    let selectedOption = option.querySelector('.option-text').innerText
    sBtn_text.innerText = selectedOption
=======
    options.forEach((otherOption) => {
      if (otherOption !== option) {
        otherOption.classList.remove('selected-option')
      }
    })

    let selectedOption = option.querySelector('.option-text').innerText
    selectContext.innerText = selectedOption
    option.classList.add('selected-option')
>>>>>>> 3169804508a076c801217ed22bc20c546a1fe26b

    optionMenu.classList.remove('active')
  })
})
