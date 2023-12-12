const languageButton = document.querySelector('.language-button')
const languageContent = document.querySelector('.language-content')
const icon = document.querySelector('.icon-cheveron-down')

function openLanguageContent() {
  languageContent.classList.add('active')
  icon.classList.add('active')
}

function closeLanguageContent() {
  languageContent.classList.remove('active')
  icon.classList.remove('active')
}

languageButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (languageContent.classList.contains('active')) {
    closeLanguageContent()
  } else {
    openLanguageContent()
  }
})

document.addEventListener('click', (event) => {
  if (
    !languageButton.contains(event.target) &&
    !languageContent.contains(event.target)
  ) {
    closeLanguageContent()
  }
})

window.addEventListener('scroll', () => {
  if (languageContent.classList.contains('active')) {
    closeLanguageContent()
  }
})
