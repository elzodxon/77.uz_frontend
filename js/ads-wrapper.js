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
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="favorite-path"
                      d="M33.2036 23.3306C33.596 22.942 33.5991 22.3088 33.2104 21.9164C32.8218 21.524 32.1886 21.521 31.7962 21.9096L33.2036 23.3306ZM19.9999 35.0001L19.2962 35.7106C19.686 36.0966 20.3139 36.0966 20.7036 35.7106L19.9999 35.0001ZM8.20361 21.9096C7.81121 21.521 7.17805 21.524 6.78941 21.9164C6.40078 22.3088 6.40383 22.942 6.79624 23.3306L8.20361 21.9096ZM6.80252 23.3368C7.19834 23.722 7.83144 23.7133 8.2166 23.3175C8.60177 22.9217 8.59314 22.2886 8.19732 21.9034L6.80252 23.3368ZM19.9999 11.6768L19.1973 12.2733C19.3854 12.5264 19.6818 12.6759 19.9971 12.6768C20.3124 12.6777 20.6097 12.5298 20.7992 12.2778L19.9999 11.6768ZM31.7992 21.9167C31.4052 22.3037 31.3995 22.9368 31.7865 23.3309C32.1735 23.7249 32.8066 23.7305 33.2007 23.3435L31.7992 21.9167ZM31.7962 21.9096L19.2962 34.2896L20.7036 35.7106L33.2036 23.3306L31.7962 21.9096ZM20.7036 34.2896L8.20361 21.9096L6.79624 23.3306L19.2962 35.7106L20.7036 34.2896ZM8.19732 21.9034C6.21923 19.9786 5.48946 17.106 6.30896 14.4704L4.39915 13.8766C3.35615 17.231 4.28495 20.887 6.80252 23.3368L8.19732 21.9034ZM6.30896 14.4704C7.12846 11.8348 9.35842 9.88256 12.0792 9.41873L11.7431 7.44717C8.28028 8.0375 5.44215 10.5222 4.39915 13.8766L6.30896 14.4704ZM12.0792 9.41873C14.8001 8.9549 17.5509 10.0581 19.1973 12.2733L20.8025 11.0803C18.7071 8.26087 15.206 6.85685 11.7431 7.44717L12.0792 9.41873ZM20.7992 12.2778C22.4525 10.0789 25.1975 8.9904 27.9084 9.45856L28.2488 7.48773C24.7985 6.89189 21.3049 8.27728 19.2007 11.0758L20.7992 12.2778ZM27.9084 9.45856C30.6194 9.92672 32.8403 11.8728 33.6604 14.4988L35.5694 13.9026C34.5257 10.5604 31.6991 8.08358 28.2488 7.48773L27.9084 9.45856ZM33.6604 14.4988C34.4805 17.1248 33.7619 19.9889 31.7992 21.9167L33.2007 23.3435C35.6986 20.89 36.6132 17.2448 35.5694 13.9026L33.6604 14.4988Z"
                      fill="white"
                    />
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
