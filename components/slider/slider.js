let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector(".slider__container");
  const cards = document.querySelectorAll(".slider__card");
  const items = document.querySelectorAll(".slider__item");
  const itemWidth = items[0].offsetWidth;

  container.style.transform = `translateX(-${index * itemWidth}px)`;
  currentIndex = index;

  cards.forEach((card) => {
    card.classList.remove("active");
  });

  cards[index].classList.add("active");

  items.forEach((item) => {
    item.classList.remove("active");
  });

  items[index].classList.add("active");
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 4) % 4;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 4;
  showSlide(currentIndex);
}

showSlide(currentIndex);
