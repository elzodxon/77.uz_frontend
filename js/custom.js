const searchInput = document.querySelector('.search__input')
const searchContent = document.querySelector(".search")

blocker.addEventListener('click', () => {
  document.body.classList.remove('block')
  blocker.classList.remove('active')
})
searchInput.addEventListener('focus', (e) => {
  e.preventDefault()
  blocker.classList.add('active')
  document.body.classList.add('block')
  searchContent.classList.add("active")
})
searchInput.addEventListener('blur', (e) => {
  e.preventDefault()
  blocker.classList.remove('active')
  document.body.classList.remove('block')
  searchContent.classList.remove("active")
})



