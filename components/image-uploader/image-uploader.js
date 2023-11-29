const fileInput = document.querySelector('#files');
const gallery = document.querySelector('#gallery-wrapper');
const dropbox = document.getElementById('dropbox');
const files = [];

// Create gallery card
const createGalleryCard = (id, image) => {
  return `<div class="gallery__item">
            <div class="gallery__item-image" draggable="true">
              <div class="actions">
                <button id="actions__change-button" class="actions__button">
                  <img class="actions__button-image" src="../../assets/img/change-button.svg" />
                </button>
                <button class="remove-image actions__button" data-id="${id}">
                  <img class="actions__button-image" src="../../assets/img/trash-button.svg" />
                </button>
              </div>
              <img class="gallery__item-photo" draggable="false" src="${image}" />
            </div>
          </div>`;
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

// Render images
const renderImages = () => {
  gallery.innerHTML = '';

  files.forEach((element) => {
    const reader = new FileReader();
    reader.onload = () => {
      const card = document.createElement('div');
      card.innerHTML = createGalleryCard(element.id, reader.result);
      gallery.append(card);
    };

    reader.readAsDataURL(element.file);
  });
};

// Handle dragenter event on dropbox
dropbox.addEventListener('dragenter', (e) => {
  e.preventDefault();
  dropbox.classList.add('active'); // Add active class to dropbox
});

// Handle dragleave event on dropbox
dropbox.addEventListener('dragleave', () => {
  dropbox.classList.remove('active'); // Remove active class when leaving the dropbox area
});


// Prevent default behavior for dragover to allow dropping
dropbox.addEventListener('dragover', (e) => {
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
document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('remove-image')) {
    const id = target.getAttribute('data-id');
    removeImage(parseFloat(id));
  }
});
