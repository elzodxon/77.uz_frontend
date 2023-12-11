const pagesContainer = document.getElementById('pages')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

const dataSet = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
  {
    id: 19,
  },
  {
    id: 20,
  },
]

let currentPage = 1
let perPage = 2

function displayPageNav(perPage) {
  const totalItems = dataSet.length
  perPage = perPage ? perPage : 1
  const pages = Math.ceil(totalItems / perPage)

  for (let i = 1; i <= pages; i++) {
    const pageButton = document.createElement('button')
    pageButton.classList.add('pagination__button')
    pageButton.textContent = i
    pageButton.setAttribute('id', i)
    pageButton.addEventListener('click', () => {
      currentPage = i
      displayItems(i, perPage)
    })
    if (i === 1) {
      pageButton.classList.add('active')
    }
    pagesContainer.appendChild(pageButton)
  }
}

function displayItems(page = 1, perPage = 2) {
  let index, offSet

  if (page == 1 || page <= 0) {
    index = 0
    offSet = perPage
  } else if (page > dataSet.length) {
    index = page - 1
    offSet = dataSet.length
  } else {
    index = page * perPage - perPage
    offSet = index + perPage
  }

  const slicedItems = dataSet.slice(index, offSet)

  const html = slicedItems.map(
    (item) =>
      `<tr>
        <td>${item.id}</td>
      </tr>`,
  )

  document.querySelector('#container tbody').innerHTML = html.join('')
  const activePageButton = document.querySelector('.active')
  activePageButton.classList.remove('active')
  const clickedPageButton = document.getElementById(page)
  clickedPageButton.classList.add('active')
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    displayItems(currentPage, perPage)
  }
})

nextButton.addEventListener('click', () => {
  const totalItems = dataSet.length
  const totalPages = Math.ceil(totalItems / perPage)

  if (currentPage < totalPages) {
    currentPage++
    displayItems(currentPage, perPage)
  }
})

displayPageNav(perPage)
displayItems(1, perPage)
