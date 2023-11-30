// MAIN SEARCH

const searchInput = document.querySelector('.search__input');
const blocker = document.querySelector('.blocker');
const favoriteProductButton = document.querySelectorAll(
  '.favorite__product-button'
);
const favoriteProductPath = document.querySelectorAll('.favorite-path');

for (let i = 0; i < favoriteProductButton.length; i++) {
  favoriteProductButton[i].addEventListener('click', () => {
    favoriteProductPath[i].classList.toggle('active');
  });
}

searchInput.addEventListener('focus', (e) => {
  e.preventDefault();
  blocker.classList.toggle('active');
  document.body.classList.toggle('block');
});
blocker.addEventListener('click', () => {
  document.body.classList.remove('block');
  blocker.classList.remove('active');
});