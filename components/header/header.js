const languageButton = document.querySelector('.language-button');
const languageContent = document.querySelector('.language-content');

function openLanguageContent() {
  languageContent.classList.add('active');
}

function closeLanguageContent() {
  languageContent.classList.remove('active');
}

languageButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (languageContent.classList.contains('active')) {
    closeLanguageContent();
  } else {
    openLanguageContent();
  }
});

document.addEventListener('click', (event) => {
  if (
    !languageButton.contains(event.target) &&
    !languageContent.contains(event.target)
  ) {
    closeLanguageContent();
  }
});

window.addEventListener('scroll', () => {
  if (languageContent.classList.contains('active')) {
    closeLanguageContent();
  }
});
