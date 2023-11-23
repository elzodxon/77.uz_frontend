const languageButton = document.querySelector('.language-button')
const languageContent = document.querySelector('.language-content')

languageButton.addEventListener('click', e => {
  e.preventDefault()
  languageContent.classList.toggle('active')
})
