const fileInput = document.querySelector('#files');
const gallery = document.querySelector('#gallery-wrapper');
const dropbox = document.getElementById('dropbox');
let files = [];

// Create gallery card
const createGalleryCard = (id, image) => {
  return `
          <div class="gallery__item" draggable="true" ondragstart="dragStart(e)" ondragover="dragOver(e)"  ondrop="dragDrop(e)" ondragend="dragEnd()">
          <div class="gallery__item-image" draggable="true">
            <div class="actions" draggable="false">
              <button  class="actions__button" draggable="false">
                <img class="actions__button-image" draggable="false" src="../../assets/img/change-button.svg" />
              </button>
              <button class="remove-image actions__button" draggable="false" data-id="${id}">
                <img class="actions__button-image"  draggable="false" src="../../assets/img/trash-button.svg" />
              </button>
            </div>
            <img class="gallery__item-photo" draggable="false" src="${image}" />
          </div>
        </div>
          `;
};

// Remove image
const removeImage = (id) => {
  files.forEach((element, index) => {
    if (element.id === id) {
      files.splice(index, 1);
    }
  });
  renderImages();
};

// Remove image



// Render images
const renderImages = () => {
gallery.innerHTML = ''
  files.forEach((element) => {
    const reader = new FileReader();
    reader.onload = () => {
      const card = document.createElement('div');
      card.innerHTML = createGalleryCard(element.id, reader.result);
      gallery.appendChild(card);
    };

    reader.readAsDataURL(element.file);
  });
  makeDraggable()
};

// Handle dragenter event on dropbox
dropbox.addEventListener('dragenter', (e) => {
  e.preventDefault();
  dropbox.classList.add('active'); // Add active class to dropbox
});

// !!! REMOVED TO FIX BUG: dropbbox disappaering, and image is opening in whole tab !!!

// Handle dragleave event on dropbox
// dropbox.addEventListener('dragleave', () => {
//   dropbox.classList.remove('active'); // Remove active class when leaving the dropbox area
// });


// Prevent default behavior for dragover to allow dropping
dropbox.addEventListener('dragover', (e) => {
window.removeEventListener('dragenter')
  e.preventDefault();
});

// Handle drop event on dropbox
dropbox.addEventListener('drop', (e) => {
  e.preventDefault();

  const droppedFiles = e.dataTransfer.files;

  if (droppedFiles.length > 0) {
    const file = {
      id: Math.random() * 1000,
      file: droppedFiles[0],
    };

    files.push(file);

    renderImages();
  }

  dropbox.classList.remove('active');
});

fileInput.addEventListener('change', (e) => {
  const file = {
    id: Math.random() * 1000,
    file: e.target.files[0],
  };

  files.push(file);

  renderImages();
});

// Event delegation for dynamically created delete buttons
// document.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target.classList.contains('remove-image')) {
//     const id = target.getAttribute('data-id');
//     removeImage(parseFloat(id));
//   }
//   renderImages()
// });



let dragSrcEl;

function dragStart(e) {

  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
  return false;
}

function dragOver(e) {

  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
}

function dragEnd() {
  const listItems = document.querySelectorAll(".gallery__item");
  [].forEach.call(listItems, function(item) {
    item.draggable = "true";
  });

  return false;
}

function addEventsDragAndDrop(el) {
  el.addEventListener("dragstart", dragStart, false);
  el.addEventListener("dragover", dragOver, false);
  el.addEventListener("drop", dragDrop, false);
  el.addEventListener("dragend", dragEnd, false);
}

function makeDraggable(){

  const listItems = document.getElementsByClassName(".gallery__item");
  [].forEach.call(listItems, function(item) {
    addEventsDragAndDrop(item);
  });
  console.log(listItems)

}