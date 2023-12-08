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
              <button  class="actions__button" draggable="false">
                <img class="actions__button-image" draggable="false" src="../../assets/img/change-button.svg" alt="change button image" />
              </button>
              <button class="remove-image actions__button" draggable="false" data-id="${id}">
                <img class="actions__button-image"  draggable="false" src="../../assets/img/trash-button.svg" data-id="${id}" alt="trash button image" />
              </button>
            </div>
            <img class="gallery__item-photo" draggable="false" src="${image}" alt="image you added"/>
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
    e.dataTransfer.effectAllowed = 'move'
    dragSrcEl = this
    e.dataTransfer.setData('text/html', this.innerHTML)
    window.removeEventListener('dragenter', activateDropbox)

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

  function removeCard(e) {
    const galleryItem = e.target.closest('.gallery__item')
    galleryItem.remove()
    const id = e.target.dataset.id
    const index = files.findIndex((element) => element.id.toString() == id)
    if (index !== -1) {
      files.splice(index, 1)
    }
  }

  window.addEventListener('dragenter', activateDropbox)

  window.addEventListener('DOMNodeInserted', () => {
    const removeButtons = document.querySelectorAll('.remove-image')
    removeButtons.forEach((button) => {
      button.addEventListener('click', (e) => removeCard(e))
    })
  })
})
