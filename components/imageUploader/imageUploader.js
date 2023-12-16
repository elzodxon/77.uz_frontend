document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.querySelector('#files')
  const gallery = document.querySelector('#gallery-wrapper')
  const dropbox = document.getElementById('dropbox')
  let files = []
  let cardId = 1

  // Create gallery card
  const createGalleryCard = (id, image) => {
    return `
<div class="gallery__item-image" draggable="true">
  <div class="actions" draggable="false">
    <button class="actions__button" draggable="false">
      <img
        class="move-image actions__button-image"
        draggable="false"
        src="../../assets/img/ImageUploader/change-button.svg"
        alt="change button image"
      />
    </button>
    <button
      class="remove-image actions__button"
      draggable="false"
      data-id="${id}"
      id="delete-modal"
      onclick="event.preventDefault(); openModal('delete-layer')"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        draggable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="trash-01">
          <path
            id="Icon"
            d="M1.59961 3.59995H14.3996M5.59961 1.19995H10.3996M6.39961 11.6V6.79995M9.59961 11.6V6.79995M10.7996 14.8H5.19961C4.31595 14.8 3.59961 14.0836 3.59961 13.2L3.23433 4.43326C3.21539 3.97876 3.57874 3.59995 4.03364 3.59995H11.9656C12.4205 3.59995 12.7838 3.97876 12.7649 4.43326L12.3996 13.2C12.3996 14.0836 11.6833 14.8 10.7996 14.8Z"
            stroke=""
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>
  </div>
  <img
    class="gallery__item-photo"
    draggable="false"
    src="${image}"
    alt="image you added"
  />
</div>
          `
  }

  // Render images
  const renderImages = (fileList) => {
    gallery.innerHTML = ''
    fileList.forEach((element) => {
      const reader = new FileReader()
      reader.onload = () => {
        const card = document.createElement('div')
        card.setAttribute('id', `${element.id}`)
        card.classList.add('gallery__item')
        card.innerHTML = createGalleryCard(element.id, reader.result)
        gallery.append(card)
        addEventsDragAndDrop(card)
      }
      reader.readAsDataURL(element.file)
    })
  }

  // Handle dragenter event on dropbox
  dropbox.addEventListener('dragenter', (e) => {
    e.preventDefault()
  })

  // Prevent default behavior for dragover to allow dropping
  dropbox.addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  // Handle drop event on dropbox
  dropbox.addEventListener('drop', (e) => {
    e.preventDefault()
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      for (let i = 0; i < droppedFiles.length; i++) {
        const currentCardId = cardId // Capture the current cardId before the loop
        const file = {
          id: currentCardId,
          file: droppedFiles[i],
        }
        files.push(file)
        cardId += 1 // Increment cardId after processing the files
      }
      renderImages(files)
    }
    dropbox.classList.remove('active')
  })

  dropbox.addEventListener('click', hideDropbox)

  const dropboxFloat = document.querySelectorAll('.dropbox__float')[0]
  dropboxFloat.addEventListener('click', () => {
    fileInput.click()
  })

  fileInput.addEventListener('change', (e) => {
    const droppedFiles = e.target.files
    if (droppedFiles.length > 0) {
      for (let i = 0; i < droppedFiles.length; i++) {
        const currentCardId = cardId // Capture the current cardId before the loop
        const file = {
          id: currentCardId,
          file: droppedFiles[i],
        }
        files.push(file)
        cardId += 1 // Increment cardId after processing the files
      }
      renderImages(files)
    }
  })

  // make images Draggable <START>
  let dragSrcEl

  function dragStart(e) {
    window.removeEventListener('dragenter', activateDropbox)
    e.dataTransfer.effectAllowed = 'move'
    dragSrcEl = this
    dragSrcEl.opacity = 0.5
    // dragSrcEl.classList.add('dragover')
    e.dataTransfer.setData('text/html', this.innerHTML)

    return false
  }

  function dragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    this.classList.add('dragover')

    return false
  }

  function dragLeave(e) {
    e.preventDefault()
    this.classList.remove('dragover')

    return false
  }

  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML
      this.innerHTML = e.dataTransfer.getData('text/html')
    }

    this.classList.remove('dragover')
    window.addEventListener('dragenter', activateDropbox)

    return false
  }

  function dragEnd() {
    const listItems = document.querySelectorAll('.gallery__item')
    ;[].forEach.call(listItems, function (item) {
      item.draggable = 'true'
    })

    return false
  }

  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false)
    el.addEventListener('dragover', dragOver, false)
    el.addEventListener('dragleave', dragLeave, false)
    el.addEventListener('drop', dragDrop, false)
    el.addEventListener('dragend', dragEnd, false)
  }

  // make images Draggable <END>

  function hideDropbox(e) {
    e.preventDefault()
    dropbox.classList.remove('active')
  }

  function activateDropbox(e) {
    e.preventDefault()
    dropbox.classList.add('active')
  }

  function removeCard(galleryItem) {
    galleryItem.remove()
    const id = galleryItem.id
    const index = files.findIndex(
      (element) => element.id.toString() === id.toString(),
    )
    if (index !== -1) {
      files.splice(index, 1)
    }
  }

  window.addEventListener('dragenter', activateDropbox)

  window.addEventListener('DOMNodeInserted', () => {
    const trashButtons = document.querySelectorAll('.remove-image')
    trashButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
    
        const galleryItem = e.target.closest('.gallery__item')
        const btnDanger = document.querySelector('.btn.btn-danger')
        btnDanger.addEventListener('click', (event) => {
          event.preventDefault()
          removeCard(galleryItem)
        })
      })
    })
  })
})
