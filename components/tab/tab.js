const switcherButton = document.querySelectorAll('.language-switcher__input')
const languageSwitcher = document.querySelectorAll('.language-switcher')
const overlay = document.querySelector('.language-switcher__active')

for (let i = 0; i < languageSwitcher.length; i++) {
  languageSwitcher[i].addEventListener('click', function () {
    if (switcherButton[i].value === 'russian') {
      overlay.classList.add(`russian`)
      overlay.classList.remove('english')
    } else if (switcherButton[i].value === 'english') {
      overlay.classList.add(`english`)
      overlay.classList.remove('russian')
    }
  })
}
