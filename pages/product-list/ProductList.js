const languageButton = document.querySelector('.language-button')
const languageContent = document.querySelector('.language-content')
const switchers = document.querySelectorAll(
  '.product-list__view-icons .product-list__view-icon',
)
const view_wraps = document.querySelectorAll('.view-wrap')
const list_view = document.querySelector('.list-view')
const grid_view = document.querySelector('.grid-view')
const card_image = document.getElementsByClassName('card-image')

const card_address = document.getElementsByClassName('card-address')
const card_title = document.getElementsByClassName('card-title')
const card_date = document.getElementsByClassName('card-date')
const card_phoneNum = document.getElementsByClassName('card-phoneNum')
const card_price = document.getElementsByClassName('card-price')

const productList = [
  {
    id: 0,
    name: 'Shirt',
    slug: 'Shirt',
    price: 10000000,
    photo:
      'https://admin.77.uz/media/cache/34/4a/344ab7a151defd972d85af9c59dad663.jpg',
    published_at: '2023-11-16T15:24:37.758522+05:00',
    address: {
      district: {
        id: 0,
        name: 'Sirg`ali tumani',
        region: {
          id: 0,
          name: 'Toshkent shahri',
        },
      },
      name: 'Yangixayot tumani',
      lat: 43.0,
      long: 43.0,
    },
    seller: {
      id: 0,
      full_name: "Qodirov Axrorbek A'zamovich",
      phone_number: '+998770075521',
      profile_photo: null,
    },
    extra: {
      is_mine: false,
      status: 'active',
      expires_at: '14.02.2024',
    },
    is_liked: false,
    updated_time: '2023-11-16T16:32:00.134939+05:00',
  },
  {
    id: 1,
    name: 'T-Shirt',
    slug: 'T-Shirt',
    price: 2000000,
    photo:
      'https://admin.77.uz/media/cache/34/4a/344ab7a151defd972d85af9c59dad663.jpg',
    published_at: '2023-11-16T15:24:37.758522+05:00',
    address: {
      district: {
        id: 1,
        name: 'Sirg`ali tumani',
        region: {
          id: 1,
          name: 'Toshkent shahri',
        },
      },
      name: 'Yangixayot tumani',
      lat: 43.0,
      long: 43.0,
    },
    seller: {
      id: 1,
      full_name: "Ergashev Axrorbek A'zamovich",
      phone_number: '+998770075521',
      profile_photo: null,
    },
    extra: {
      is_mine: false,
      status: 'active',
      expires_at: '14.02.2024',
    },
    is_liked: false,
    updated_time: '2023-11-16T16:32:00.134939+05:00',
  },
]

languageButton.addEventListener('click', (e) => {
  e.preventDefault()
  languageContent.classList.toggle('active')
})

switchers.forEach(function (switcher) {
  switcher.addEventListener('click', function () {
    switchers.forEach(function (switcher) {
      switcher.classList.remove('active')
    })

    switcher.classList.add('active')

    var view = switcher.getAttribute('data-view')

    view_wraps.forEach(function (view) {
      view.style.display = 'none'
    })
    if (view == 'list-view') {
      list_view.style.display = 'block'
    } else {
      grid_view.style.display = 'block'
    }
  })
})

function productGetList(productList) {
  productList.map((product) => {
    card_image[0].src = product.photo
    card_image[1].src = product.photo
    card_address[0].innerText = product.address.district.name
    card_address[1].innerText = product.address.district.name
    card_title[0].innerText = product.name
    card_title[1].innerText = product.name
    card_date[0].innerText = dateFormatter(product.published_at)
    card_date[1].innerText = dateFormatter(product.published_at)
    card_phoneNum[0].innerText = product.seller.phone_number
    card_phoneNum[1].innerText =  product.seller.phone_number
    card_price[0].innerHTML = `${product.price}    <span> UZS </span>`
    card_price[1].innerText = product.price
  })
}

function dateFormatter(date) {
  const dateObject = new Date(date)

  // Extract the individual components of the date
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1 // Months are zero-based, so add 1
  const year = dateObject.getFullYear()

  // Format the date components as 'DD-MM-YYYY'
  const formattedDate = `${day < 10 ? '0' : ''}${day}-${
    month < 10 ? '0' : ''
  }${month}-${year}`

  return formattedDate
}

productGetList(productList)
