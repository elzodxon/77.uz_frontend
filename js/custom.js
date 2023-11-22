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
// document.addEventListener("DOMContentLoaded", function () {
//   // Get all elements with the class "category-group"
// let  categoryGroups = document.querySelectorAll(".category-group");

//   // Add click event listener to each category group
//   categoryGroups.forEach(function (categoryGroup) {
//     categoryGroup.addEventListener("click", function () {
//       // Toggle the "active" class on the clicked category group
//       this.classList.toggle("active");
//     });

//     // Get all elements with the class "icon-inner" inside each category group
//     let  iconInners = categoryGroup.querySelectorAll(".icon-inner");

//     // Add click event listener to each icon-inner
//     iconInners.forEach(function (iconInner) {
//       iconInner.addEventListener("click", function (event) {
//         event.stopPropagation(); // Prevents the click event from reaching the category-group

//         // Toggle the "active" class on the closest ".category-union__item__inner"
//         this.closest(".category-union__item__inner").classList.toggle("active");
//       });
//     });
//   });
// });

//CATEGORY
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(function(card) {
    card.addEventListener('click', function() {
      // Remove "active" class from all category cards
      categoryCards.forEach(function(c) {
        c.classList.remove('active');
      });
      // Add "active" class to the clicked category card
      card.classList.add('active');
    });
  });
;
// SUBCATEGORY
//
document.addEventListener('DOMContentLoaded', function() {
  // Get all subcategory items
  const subcategoryItems = document.querySelectorAll('.subcategory__item');

  // Add click event listener to each subcategory item
  subcategoryItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Remove 'active' class from all subcategory items
          subcategoryItems.forEach(function(innerItem) {
              innerItem.classList.remove('active');
          });

          // Add 'active' class to the clicked subcategory item
          item.classList.add('active');

          // Toggle the visibility of other unclicked subcategory items
          subcategoryItems.forEach(function(innerItem) {
              if (innerItem !== item) {
                  innerItem.style.display = item.classList.contains('active') ? 'none' : 'block';
              }
          });
      });
  });
});

//
//

// document.addEventListener('DOMContentLoaded', function() {
//   // Get all subcategory items
//   const subcategoryItems = document.querySelectorAll('.subcategory__item');

//   // Add click event listener to each subcategory item
//   subcategoryItems.forEach(function(item) {
//       item.addEventListener('click', function() {
//           // Remove 'active' class from all subcategory items
//           subcategoryItems.forEach(function(innerItem) {
//               innerItem.classList.remove('active');
//           });

//           // Add 'active' class to the clicked subcategory item
//           item.classList.add('active');
//       });
//   });
// });




//
// function toggleSubcategories(element) {
//   // Remove 'activeNow' class from all elements
//   const allItems = document.querySelectorAll('.subcategory__item');
//   allItems.forEach(function (item) {
//       item.classList.remove('activeNow');
//   });

//   // Add 'activeNow' class to the clicked element
//   element.classList.add('activeNow');
// }

// document.querySelector('.subcategory__item').addEventListener('click', function () {
//   var subcategoryInner = this.querySelector('.subcategory__item__inner');
//   subcategoryInner.style.display = (subcategoryInner.style.display === 'none' || subcategoryInner.style.display === '') ? 'block' : 'none';
// });

// const innerIcons = document.getElementsByClassName('.icon-inner');
// const subcategoryItems= document.getElementsByClassName('.subcategory__item');

// subcategoryItems.forEach(function(subItem){
//   subItem.addEventListener('click', ()=>{
//       // Remove "activeNow" class from all subcategory__item
//       subcategoryItems.forEach(function(sc) {
//         sc.classList.remove('activeNow');
//       });
//       // Add "activeNow" class to the clicked subcategory__item
//       subItem.classList.add('activeNow');
//     });
//   })

// document.addEventListener("DOMContentLoaded", function () {
//   // Get all elements with the class "category-group"
//   let categoryGroups = document.querySelectorAll(".category-group");

//   // Add click event listener to each category group
//   categoryGroups.forEach(function (categoryGroup) {
//     categoryGroup.addEventListener("click", function () {
//       // Deactivate all other category groups
//       categoryGroups.forEach(function (otherCategoryGroup) {
//         if (otherCategoryGroup !== categoryGroup) {
//           otherCategoryGroup.classList.remove("active");
//         }
//       });

//       // Toggle the "active" class on the clicked category group
//       this.classList.toggle("active");
//     });

//     // Get all elements with the class "icon-inner" inside each category group
//     var iconInners = categoryGroup.querySelectorAll(".icon-inner");

//     // Add click event listener to each icon-inner
//     iconInners.forEach(function (iconInner) {
//       iconInner.addEventListener("click", function (event) {
//         event.stopPropagation(); // Prevents the click event from reaching the category-group

//         // Toggle the "active" class on the closest ".category-union__item__inner"
//         this.closest(".category-union__item__inner").classList.toggle("active");
//       });
//     });
//   });
// });
