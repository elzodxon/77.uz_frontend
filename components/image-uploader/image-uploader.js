let dropBox = document.getElementById("dropbox");
let container = document.getElementById("container")
let array = [dropBox, container]

array.forEach((element) => {
    element.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log(e.dataTransfer.files);
    });
    element.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    element.addEventListener("dragleave", (e) => {
        e.preventDefault();
    });
})