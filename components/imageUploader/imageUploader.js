const fileInput = document.querySelector('#files')
const gallery = document.querySelector('#gallery-wrapper')
const dropbox = document.getElementById('dropbox')
let files = []

// Create gallery card
const createGalleryCard = (id, image) => {
  return `
          <div class="gallery__item-image" draggable="true">
            <div class="actions" draggable="false">
              <button  class="actions__button" draggable="false">
                <img class="actions__button-image" draggable="false" src="../../assets/img/change-button.svg" alt="change button image" />
              </button>
              <button class="remove-image actions__button" draggable="false" data-id="${id}">
                <img class="actions__button-image"  draggable="false" src="../../assets/img/trash-button.svg" alt="trash button image" />
              </button>
            </div>
            <img class="gallery__item-photo" draggable="false" src="${image}" alt="image you added"/>
          </div>
          `
}

// Render images
const renderImages = () => {
  gallery.innerHTML = ''
  files.forEach((element) => {
    const reader = new FileReader()
    reader.onload = () => {
      const card = document.createElement('div')
      card.classList.add('gallery__item')
      card.innerHTML = createGalleryCard(element.id, reader.result)
      gallery.append(card)
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
    console.log(droppedFiles)
    for (let i = 0; i < droppedFiles.length; i++) {
      const file = {
        id: Math.random() * 1000,
        file: droppedFiles[i],
      }
      files.push(file)
    }
    renderImages()
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
    console.log(droppedFiles)
    for (let i = 0; i < droppedFiles.length; i++) {
      const file = {
        id: Math.random() * 1000,
        file: droppedFiles[i],
      }
      files.push(file)
    }
    renderImages()
  }
})

// make images Draggable <START>
let dragSrcEl

function dragStart(e) {
  window.removeEventListener('dragenter', activateDropbox)
  dragSrcEl = this
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text/html', this.innerHTML)

  return false
}

function dragOver(e) {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'

  return false
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text/html')
  }
  window.addEventListener('dragenter', activateDropbox)

  return false
}

function dragEnd() {
  const listItems = document.querySelectorAll('.gallery__item')
    ;[].forEach.call(listItems, function(item) {
      item.draggable = 'true'
    })

  return false
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false)
  el.addEventListener('dragover', dragOver, false)
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

window.addEventListener('dragenter', activateDropbox)

window.addEventListener('DOMNodeInserted', () => {
  const listItems = document.querySelectorAll('.gallery__item')
  listItems.forEach((el) => {
    addEventsDragAndDrop(el)
  })
  const removeButtons = document.querySelectorAll('.remove-image')
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const galleryItem = event.target.closest('.gallery__item')
      galleryItem.remove()
      const id = event.target.dataset.id
      const index = files.findIndex((element) => element.id === parseFloat(id))

      // Remove the element from the array if found
      if (index !== -1) {
        files.splice(index, 1)
      }
    })
  })
})
