let currentIndex = 0;

const images = [
  "../../assets/img/SliderImg1.png",
  "../../assets/img/SliderImg1.png",
  "../../assets/img/SliderImg1.png",
  "../../assets/img/SliderImg1.png",
  "../../assets/img/SliderImg1.png",
];

function initializeSlider() {
  renderSliderImages();
  renderSliderCards();
  showSlide(currentIndex);
}

function renderSliderImages() {
  const container = document.getElementById("sliderContainer");

  images.forEach((imageUrl, index) => {
    const item = document.createElement("div");
    item.classList.add("slider__item");

    const img = document.createElement("img");
    img.classList.add("slider__item-img");
    img.src = imageUrl;
    img.alt = `img ${index + 1}`;

    item.appendChild(img);
    container.appendChild(item);
  });
}

function renderSliderCards() {
  const container = document.getElementById("cardContainer");

  images.forEach((imageUrl, index) => {
    const card = document.createElement("div");
    card.classList.add("slider__card");
    card.onclick = () => showSlide(index);

    const cardContent = document.createElement("div");
    cardContent.classList.add("slider__card-content");

    const img = document.createElement("img");
    img.classList.add("slider__card-img");
    img.src = imageUrl;
    img.alt = `img ${index + 1}`;

    cardContent.appendChild(img);
    card.appendChild(cardContent);
    container.appendChild(card);
  });
}

function showSlide(index) {
  const container = document.getElementById("sliderContainer");
  const cards = document.querySelectorAll(".slider__card");

  const itemWidth = container.offsetWidth;
  container.style.transform = `translateX(-${index * itemWidth}px)`;
  currentIndex = index;

  cards.forEach((card, cardIndex) => {
    card.classList.toggle("active", cardIndex === index);
  });
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  showSlide(currentIndex);
}

initializeSlider();
