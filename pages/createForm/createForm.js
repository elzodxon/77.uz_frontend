const createInputs = document.querySelectorAll('.create-input')
const createSubmutButton = document.querySelector('.create-submit-button')

createSubmutButton.addEventListener('click', (e) => {
  e.preventDefault()
  createInputs.forEach((input) => {
    if (input.value.length === 0) {
      input.classList.add('error')
    }
    
return
  })
})
