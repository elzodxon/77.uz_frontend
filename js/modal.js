// -------------------------------------------------Sixth BTN JS-----------------------------------------------------------//
const blocker = document.querySelector('.blocker')

const registration = document.querySelector('#registration'),
  registrationBtn = document.querySelector('#registration-btn'),
  registrationCloseBtn = document.querySelector('#registration-close-btn'),
  submitBtn = document.querySelector('#submitBtn'),
  addressSubmitBtn = document.querySelector('#address-submit-btn'),
  continueBtn = document.querySelector('#continue-registration'),
  toLoginBtn = document.querySelector('#to-login'),
  addressBtn = document.querySelector('#address-password')

const forgetPassword = document.querySelector('#forget-password'),
  forgetBtn = document.querySelector('#icon-close'),
  closeBtnFourth = document.querySelector('#btn-close')

const allModals = document.querySelectorAll('.center')

const input = document.querySelectorAll('.input')

const chechInputValue = (element) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value.length === 0) {
      input[i].classList.add('error')
    } else {
      input[i].classList.remove('error')
    }
  }
}

registrationBtn.addEventListener('click', (e) => {
  e.preventDefault()
  registration.classList.toggle('active')
  blocker.classList.toggle('active')
  document.body.classList.toggle('block')
})
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  chechInputValue()
})

continueBtn.addEventListener('click', (e) => {
  e.preventDefault()
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active')
  }

  chechInputValue()

  addressBtn.classList.add('active')
})

toLoginBtn.addEventListener('click', (e) => {
  e.preventDefault()
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active')
  }
  registration.classList.toggle('active')
})

registrationCloseBtn.addEventListener('click', (e) => {
  e.preventDefault()
  registration.classList.remove('active')
  blocker.classList.remove('active')
  document.body.classList.remove('block')
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (registration.classList.contains('active')) {
      registration.classList.remove('active')
      blocker.classList.remove('active')
      document.body.classList.remove('block')
    }
  }
})

forgetBtn.addEventListener('click', () => {
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active')
  }

  forgetPassword.classList.add('active')
})

blocker.addEventListener('click', () => {
  forgetPassword.classList.remove('active')
  blocker.classList.remove('active')
})

closeBtnFourth.addEventListener('click', () => {
  forgetPassword.classList.remove('active')
  blocker.classList.remove('active')
  document.body.classList.remove('block')
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (forgetPassword.classList.contains('active')) {
      forgetPassword.classList.remove('active')
      blocker.classList.remove('active')
      document.body.classList.remove('block')
    }
  }
})

// -------------------------------------------------Seventh BTN JS-----------------------------------------------------------//

const application = document.querySelector('#application'),
  applicationBtn = document.querySelector('#application-btn'),
  applicationCloseBtn = document.querySelector('#application-close-btn')

applicationBtn.addEventListener('click', (e) => {
  e.preventDefault()

  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active')
  }

  application.classList.add('active')
  blocker.classList.add('active')
  document.body.classList.add('block')
})

blocker.addEventListener('click', () => {
  blocker.classList.remove('active')
  document.body.classList.remove('block')
  application.classList.remove('active')
})

applicationCloseBtn.addEventListener('click', () => {
  blocker.classList.remove('active')
  application.classList.remove('active')
  document.body.classList.remove('block')
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (application.classList.contains('active')) {
      application.classList.remove('active')
      blocker.classList.remove('active')
      document.body.classList.remove('block')
    }
  }
})

// -------------------------------------------------THIRD BTN JS-----------------------------------------------------------//

const acceptance = document.querySelector('#acceptance'),
  acceptBtn = document.querySelector('#accept'),
  closeBtnThird = document.querySelector('#close-icon'),
  registeredBtn = document.querySelector('#registered-button')

acceptBtn.addEventListener('click', (e) => {
  e.preventDefault()

  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active')
  }

  blocker.classList.add('active')
  document.body.classList.add('block')

  acceptance.classList.add('active')
})

closeBtnThird.addEventListener('click', () => {
  acceptance.classList.remove('active')
  blocker.classList.remove('active')
  document.body.classList.remove('block')
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (acceptance.classList.contains('active')) {
      acceptance.classList.remove('active')
      blocker.classList.remove('active')
      document.body.classList.remove('block')
    }
  }
})

registeredBtn.addEventListener('click', (e) => {
  e.preventDefault()
  blocker.classList.remove('active')
  document.body.classList.remove('block')
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active')
  }
})

blocker.addEventListener('click', () => {
  document.body.classList.remove('block')
  blocker.classList.remove('active')
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active')
  }
})
