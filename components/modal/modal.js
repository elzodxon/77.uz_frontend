const overlay = document.querySelector('.overlay')

function openModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.style.display = 'block'
  modal.style.zIndex = '1000'
  overlay.style.display = 'block'
  document.addEventListener('keydown', (event) => handleKeyDown(event, modalId))
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.style.display = 'none'
  modal.style.zIndex = '0'
  overlay.style.display = 'none'
  document.removeEventListener('keydown', (event) =>
    handleKeyDown(event, modalId),
  )
}

function handleKeyDown(event, modalId) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    closeModal(modalId)
  }
}

overlay.addEventListener('click', (event) => {
  const modalContainers = document.querySelectorAll('.modal')
  modalContainers.forEach((modalContainer) => {
    if (!modalContainer.contains(event.target)) {
      closeModal(modalContainer.id)
    }
  })
})

function validateForm(modalId) {
  const modal = document.getElementById(modalId)
  const inputs = modal.querySelectorAll('.input[required]')

  let isValid = true

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false
      markInputAsError(input)
    } else {
      removeErrorFromInput(input)
    }
  })

  return isValid
}

function markInputAsError(input) {
  input.classList.add('error')
}

function removeErrorFromInput(input) {
  input.classList.remove('error')
}

function handleSubmit(modalId) {
  const isValid = validateForm(modalId)

  if (isValid) {
    closeModal(modalId)
  }
}

const modalButtons = document.querySelectorAll('.modal .btn')
modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.closest('.modal').id
    handleSubmit(modalId)
  })
})
