const dropBox = document.querySelector("#dropbox");
const container = document.querySelector("#dropbox__container");

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

const listItems = document.querySelectorAll(".gallery__item");
[].forEach.call(listItems, function(item) {
  addEventsDragAndDrop(item);
});

