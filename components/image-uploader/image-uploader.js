let dropBox = document.getElementById("dropbox_dragging");
let container = document.getElementById("dropbox_dragging__container");
let array = [dropBox, container];
let change_button = document.querySelector("#actions__change-button");

change_button.addEventListener("click", () => { });

array.forEach((element) => {
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
  });
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover");
  });
  element.addEventListener("dragleave", (e) => {
    e.preventDefault();
  });
});

//DOM Elements
const boxes = document.querySelectorAll(".gallery__item");
let box_drag;
let box_drop;
let image;
let temp;
//Loop through each boxes element
boxes.forEach((box) => {
  //When a draggable element dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); //Prevent default behaviour
    box_drag = box;
    box.classList.add("hovered");
  });

  //When a draggable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  //When a draggable element is dropped on a box elemen
  box.addEventListener("drop", () => {
    box_drop = box;
    box.classList.remove("hovered");
    // box.querySelectorAll(".actions")[0].classList.remove("hidden");
    // box.querySelectorAll(".gallery__item-image")[0].classList.remove("hidden");
    // box.querySelectorAll(".gallery__item-empty")[0].classList.add("hidden");
    // box.querySelectorAll(".gallery__item-photo")[0].src = box_drag.querySelectorAll(".gallery__item-photo")[0].src
    box.innerHTML = box_drag.innerHTML
    console.log(box)
    console.log(box_drag)
    console.log(box_drop)

  });
});
