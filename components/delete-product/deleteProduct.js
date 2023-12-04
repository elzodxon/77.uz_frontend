document.addEventListener('DOMContentLoaded', function () {
  const deleteProductBtn = document.getElementById('deleteProductBtn')
  const deleteProductModal = document.getElementById('deleteProductModal')
  const closeDeleteProductModal = document.getElementById(
    'closeDeleteProductModal',
  )
  const confirmDeleteProductBtn = document.getElementById(
    'confirmDeleteProduct',
  )
  const cancelDeleteProductBtn = document.getElementById('cancelDeleteProduct')

  function openDeleteModal() {
    deleteProductModal.style.display = 'block'
  }

  function closeDeleteModal() {
    deleteProductModal.style.display = 'none'
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      closeDeleteModal()
    }
  }

  deleteProductBtn.addEventListener('click', openDeleteModal)
  closeDeleteProductModal.addEventListener('click', closeDeleteModal)
  cancelDeleteProductBtn.addEventListener('click', closeDeleteModal)

  confirmDeleteProductBtn.addEventListener('click', function () {
    console.log('Product deleted!')
    closeDeleteModal()
  })

  window.addEventListener('click', function (event) {
    if (event.target === deleteProductModal) {
      closeDeleteModal()
    }
  })

  document.addEventListener('keydown', handleEscapeKey)
})
