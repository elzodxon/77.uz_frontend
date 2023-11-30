// Assuming you have an array of objects representing your data
const data = [
  {
    address: 'Tashkent',
    title: 'Кепки Corneliani Diamond for him edition.',
    date: 'Today, 19:20',
    phone: '+998940051916',
    cost: '2 259 000',
    currency: 'UZS',
    imageLink: `./assets/img/Image.png`,
  },
  {
    address: 'Tashkent',
    title: 'Кепки Corneliani Diamond for him edition.',
    date: 'Today, 19:20',
    phone: '+998940051916',
    cost: '2 259 000',
    currency: 'UZS',
    imageLink: `./assets/img/Image.png`,
  },
  {
    address: 'Tashkent',
    title: 'Кепки Corneliani Diamond for him edition.',
    date: 'Today, 19:20',
    phone: '+998940051916',
    cost: '2 259 000',
    currency: 'UZS',
    imageLink: `./assets/img/Image.png`,
  },
  {
    address: 'Tashkent',
    title: 'Кепки Corneliani Diamond for him edition.',
    date: 'Today, 19:20',
    phone: '+998940051916',
    cost: '2 259 000',
    currency: 'UZS',
    imageLink: `./assets/img/Image.png`,
  },
  {
    address: 'Tashkent',
    title: 'Кепки Corneliani Diamond for him edition.',
    date: 'Today, 19:20',
    phone: '+998940051916',
    cost: '2 259 000',
    currency: 'UZS',
    imageLink: `./assets/img/Image.png`,
  },
  // Add more objects as needed
];

// Function to generate HTML for each item
const generateHTML = (item) => `
  <li class="ads-wrapper__item">
    <div class="card">
      <button class="favorite__product-button">
              <svg
                class="favorite-path"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="white"
                  stroke-width="2px"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5 22.62L20 35L7.5 22.62M7.5 22.62C5.25216 20.4326 4.42288 17.1684 5.35413 14.1734C6.28538 11.1784 8.81942 8.95991 11.9113 8.43283C15.0031 7.90576 18.129 9.15935 20 11.6767C21.8788 9.17798 24.998 7.94102 28.0787 8.47303C31.1593 9.00503 33.683 11.2165 34.615 14.2006C35.5469 17.1847 34.7303 20.4393 32.5 22.63"
                ></path>
                <path
                  d="M32.5 22.62L20 35L7.5 22.62C5.25216 20.4326 4.42288 17.1684 5.35413 14.1734C6.28538 11.1784 8.81942 8.95991 11.9113 8.43283C15.0031 7.90576 18.129 9.15935 20 11.6767C21.8788 9.17798 24.998 7.94102 28.0787 8.47303C31.1593 9.00503 33.683 11.2165 34.615 14.2006C35.5469 17.1847 34.7303 20.4393 32.5 22.63"
                  stroke-width="3px"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
      </button>
      <div class="card__img">
        <img src=${item.imageLink} alt="" />
      </div>
      <div class="card-content">
        <span class="card__address">${item.address}</span>
        <h2 class="card__title">${item.title}</h2>
        <p class="card__product-date">${item.date}</p>
        <p class="card__phone">${item.phone}</p>
        <p class="card__cost">${item.cost} <span class="card__currency">${item.currency}</span></p>
      </div>
    </div>
  </li>
`;

// Get the parent container where you want to append the items
const adsContainer = document.querySelector('.ads-wrapper');

// Iterate over the data and append the generated HTML to the container
data.forEach((item) => {
  adsContainer.innerHTML += generateHTML(item);
});

const favoriteProductButton = document.querySelectorAll(
  '.favorite__product-button'
);
const favoriteProductPath = document.querySelectorAll('.favorite-path');

for (let i = 0; i < favoriteProductButton.length; i++) {
  favoriteProductButton[i].addEventListener('click', () => {
    favoriteProductPath[i].classList.toggle('active');
  });
}
