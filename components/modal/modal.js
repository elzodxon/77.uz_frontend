const center = document.querySelector(".center"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".btn"),
    closeBtn = document.querySelector(".close-btn");

    showBtn.addEventListener("click", () => center.classList.add("active"));

    overlay.addEventListener("click", () =>
        center.classList.remove("active")
    );

    closeBtn.addEventListener("click", () =>
    center.classList.remove("active")
);




