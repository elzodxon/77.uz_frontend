const switcherButton = document.querySelectorAll('.language-switcher__input')
const languageSwitcher = document.querySelectorAll('.language-switcher')
const overlaySwitcher = document.querySelector('.language-switcher__active')

for (let i = 0; i < languageSwitcher.length; i++) {
  languageSwitcher[i].addEventListener('click', function () {
    if (switcherButton[i].value === 'russian') {
      overlaySwitcher.classList.add(`russian`)
      overlaySwitcher.classList.remove('english')
    } else if (switcherButton[i].value === 'english') {
      overlaySwitcher.classList.add(`english`)
      overlaySwitcher.classList.remove('russian')
    }
  })
}
