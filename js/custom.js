document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class "category-group"
  const categoryGroups = document.querySelectorAll('.category-card');
  const categoryDropdowns = document.querySelectorAll('.category-menu');

  for (let i = 0; i < categoryGroups.length; i++) {
    categoryGroups[i].addEventListener('click', function () {
      categoryDropdowns[i].classList.toggle('active');
    });
  }
});

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

const backButton = document.querySelectorAll('.dropdown-menu__back');
const categoryMenuItem = document.querySelectorAll('.category-menu__item');
const categoryMenuItem1 = document.querySelectorAll('.category-links');

for (let i = 0; i < categoryMenuItem.length; i++) {
  categoryMenuItem[i].addEventListener('click', function () {
    categoryMenuItem1[i].classList.toggle('active');
  });
}
for (let i = 0; i < backButton.length; i++) {
  backButton[i].addEventListener('click', function (e) {
    e.stopPropagation();
    categoryMenuItem1[i].classList.remove('active');
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
