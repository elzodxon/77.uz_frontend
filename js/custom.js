document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "category-group"
  var categoryGroups = document.querySelectorAll(".category-group");

  // Add click event listener to each category group
  categoryGroups.forEach(function (categoryGroup) {
    categoryGroup.addEventListener("click", function () {
      // Toggle the "active" class on the clicked category group
      this.classList.toggle("active");
    });

    // Get all elements with the class "icon-inner" inside each category group
    var iconInners = categoryGroup.querySelectorAll(".icon-inner");

    // Add click event listener to each icon-inner
    iconInners.forEach(function (iconInner) {
      iconInner.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the category-group

        // Toggle the "active" class on the closest ".category-union__item__inner"
        this.closest(".category-union__item__inner").classList.toggle("active");
      });
    });
  });
});

const searchInput = document.querySelector(".search__input")
const blocker = document.querySelector(".blocker")

searchInput.addEventListener("focus",(e) =>{
  e.preventDefault();
  blocker.classList.toggle("active")
  document.body.classList.toggle("block")
})
blocker.addEventListener("click",() => {
  document.body.classList.remove("block")
  blocker.classList.remove("active")
})