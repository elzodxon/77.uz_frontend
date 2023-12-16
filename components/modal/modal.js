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
  document.removeEventListener('keydown', (event) => handleKeyDown(event, modalId))
}

function handleKeyDown(event, modalId) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    closeModal(modalId)
  }
}

overlay.addEventListener('click', closeModal)
