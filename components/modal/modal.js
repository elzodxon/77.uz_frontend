const modalToggleButtons = document.querySelectorAll('.toggle-button')
const allButtons = document.querySelectorAll('.btn')
const closeModalButtons = document.querySelectorAll('.close-btn')
const modals = document.querySelectorAll('.modal')
const overlay = document.querySelector('.overlay')
const modalNextButtons = document.querySelectorAll('.next-modal-button')

allButtons.forEach((button) => {
  button.addEventListener('submit', function (e) {
    e.preventDefault()
  })
})

let currentModalInputs = null

// openModal function to open modals
const openModal = (modalId) => {
  const modal = document.getElementById(modalId)
  currentModalInputs = modal.querySelectorAll('input')
  modal.classList.add('active')
  overlay.classList.add('active')
}

// closeModal function to close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId)
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

modalToggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('modal-id')
    openModal(modalId)
  })
})

modalNextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('modal-id')
    console.log(currentModalInputs)
    if (currentModalInputs) {
      currentModalInputs?.forEach((modalInput) => {
        if (modalInput.value !== '') {
          currentModalInputs = null
          if (modalId === '') {
            overlay.classList.remove('active')
          }
          nextModal(modalId)
        }
      })
    }
    if (modalId === 'password-layer' || modalId === 'application-layer') {
      nextModal(modalId)
    }
  })
})

const nextModal = (modalId) => {
  closeAllModals()
  const modal = document.getElementById(modalId)
  currentModalInputs = modal?.querySelectorAll('input')
  console.log(currentModalInputs)
  modal?.classList.add('active')
}

function closeAllModals() {
  modals.forEach((modal) => {
    modal.classList.remove('active')
  })
}

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.id
    closeModal(modalId)
  })
})
overlay.addEventListener('click', () => {
  modals.forEach((modal) => {
    modal.classList.remove('active')
  })
  overlay.classList.remove('active')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach((modal) => {
      modal.classList.remove('active')
    })
    overlay.classList.remove('active')
  }
})

