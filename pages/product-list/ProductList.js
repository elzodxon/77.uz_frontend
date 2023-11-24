const languageButton = document.querySelector('.language-button')
const languageContent = document.querySelector('.language-content')
const switchers = document.querySelectorAll('.product-list__view-icons .product-list__view-icon')
const view_wraps = document.querySelectorAll('.view-wrap')
const list_view = document.querySelector('.list-view')
const grid_view = document.querySelector('.grid-view')

languageButton.addEventListener('click', e => {
  e.preventDefault()
  languageContent.classList.toggle('active')
})

switchers.forEach(function (switcher) {
  switcher.addEventListener('click', function () {
    switchers.forEach(function (switcher) {
      switcher.classList.remove('active')
    })

    switcher.classList.add('active')

    var view = switcher.getAttribute('data-view')

    view_wraps.forEach(function (view) {
      view.style.display = 'none'
    })

    if (view == 'list-view') {
      list_view.style.display = 'block'
    } else {
      grid_view.style.display = 'block'
    }
  })
})
