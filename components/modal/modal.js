document.addEventListener('DOMContentLoaded', function () {
  const modalButton = document.getElementById('modal')
  const modal = document.querySelector('.modal')
  const overlay = document.querySelector('.overlay')
  const closeButton = document.querySelector('.close-btn')
  const cancelButton = document.querySelector('.btn-secondary')
  const deleteButton = document.querySelector('.btn-danger')

  function openModal() {
    modal.style.display = 'block'
    overlay.style.display = 'block'
    document.addEventListener('keydown', handleKeyDown)
  }

  function closeModal() {
    modal.style.display = 'none'
    overlay.style.display = 'none'
    document.removeEventListener('keydown', handleKeyDown)
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      closeModal()
    }
  }

  modalButton.addEventListener('click', openModal)
  closeButton.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal)
  cancelButton.addEventListener('click', closeModal)
  deleteButton.addEventListener('click', function () {
    console.log('Delete button clicked')
    closeModal()
  })
})
