const languageButton = document.querySelector('.language-button')
const languageContent = document.querySelector('.language-content')
const header = document.getElementById('list__switcher')
const icons = header.getElementsByClassName('switcher-icon')

languageButton.addEventListener('click', e => {
  e.preventDefault()
  languageContent.classList.toggle('active')
})

for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function () {
    var current = document.querySelector('.active')

    if (current) {
      current.classList.remove('active')
    }

    this.classList.add('active')
  })
}
