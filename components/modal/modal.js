const center = document.querySelector('.center'),
  overlay = document.querySelector('.overlay'),
  showBtn = document.querySelector('.btn'),
  closeBtn = document.querySelector('.close-btn'),
  modal = document.querySelector('.modal')

showBtn.addEventListener('click', () => center.classList.add('active'))

overlay.addEventListener('click', () => center.classList.remove('active'))

closeBtn.addEventListener('click', () => center.classList.remove('active'))

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (center.classList.contains('active'));
    center.classList.remove('active')
  }
})

// -------------------------------SEcond MODAL JS--------------------------------------------------------------------------------------//

const exit = document.querySelector('#exit-wrapper'),
  overlaySecond = document.querySelector('.overlay'),
  deleteBtn = document.querySelector('#delete'),
  closeBtnSecond = document.querySelector('#close')

deleteBtn.addEventListener('click', () => exit.classList.add('active'))

overlaySecond.addEventListener('click', () => exit.classList.remove('active'))

closeBtnSecond.addEventListener('click', () => exit.classList.remove('active'))

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (exit.classList.contains('active'));
    exit.classList.remove('active')
  }
})

// -------------------------------------------------THIRD BTN JS-----------------------------------------------------------//

const acceptance = document.querySelector('#acceptance'),
  overlayThird = document.querySelector('.overlay'),
  acceptBtn = document.querySelector('#accept'),
  closeBtnThird = document.querySelector('#close-icon')

acceptBtn.addEventListener('click', () => acceptance.classList.add('active'))

overlayThird.addEventListener('click', () =>
  acceptance.classList.remove('active'),
)

closeBtnThird.addEventListener('click', () =>
  acceptance.classList.remove('active'),
)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (acceptance.classList.contains('active'));
    acceptance.classList.remove('active')
  }
})

// -------------------------------------------------FOURTH BTN JS-----------------------------------------------------------//

const forgetPassword = document.querySelector('#forget-password'),
  overlayFourth = document.querySelector('.overlay'),
  forgetBtn = document.querySelector('#icon-close'),
  closeBtnFourth = document.querySelector('#btn-close')

forgetBtn.addEventListener('click', () =>
  forgetPassword.classList.add('active'),
)

overlayFourth.addEventListener('click', () =>
  forgetPassword.classList.remove('active'),
)

closeBtnFourth.addEventListener('click', () =>
  forgetPassword.classList.remove('active'),
)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (forgetPassword.classList.contains('active'));
    forgetPassword.classList.remove('active')
  }
})

// -------------------------------------------------Fifth BTN JS-----------------------------------------------------------//

const noInfo = document.querySelector('#noinfo'),
  overlayFifth = document.querySelector('.overlay'),
  noInfobtn = document.querySelector('#noinfo-btn')

noInfobtn.addEventListener('click', () => noInfo.classList.add('active'))

overlayFifth.addEventListener('click', () => noInfo.classList.remove('active'))

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (noInfo.classList.contains('active'));
    noInfo.classList.remove('active')
  }
})

// -------------------------------------------------Sixth BTN JS-----------------------------------------------------------//

const registration = document.querySelector('#registration'),
  overlaySix = document.querySelector('.overlay'),
  registrationBtn = document.querySelector('#registration-btn'),
  registrationCloseBtn = document.querySelector('#registration-close-btn')

registrationBtn.addEventListener('click', () =>
  registration.classList.add('active'),
)

overlaySix.addEventListener('click', () =>
  forgetPassword.classList.remove('active'),
)

registrationCloseBtn.addEventListener('click', () =>
  registration.classList.remove('active'),
)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (registration.classList.contains('active'));
    registration.classList.remove('active')
  }
})

// -------------------------------------------------Seventh BTN JS-----------------------------------------------------------//

const application = document.querySelector('#application'),
  overlaySeven = document.querySelector('.overlay'),
  applicationBtn = document.querySelector('#application-btn'),
  applicationCloseBtn = document.querySelector('#application-close-btn')

applicationBtn.addEventListener('click', () =>
  application.classList.add('active'),
)

overlaySeven.addEventListener('click', () =>
  application.classList.remove('active'),
)

registrationCloseBtn.addEventListener('click', () =>
  application.classList.remove('active'),
)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (application.classList.contains('active'));
    application.classList.remove('active')
  }
})
