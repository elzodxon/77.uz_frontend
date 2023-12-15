'use strict'

// Password
document.addEventListener('DOMContentLoaded', function () {
  const eyeIcon = document.querySelector('.open-eye')
  const passwordInput = document.getElementById('password')

  eyeIcon.addEventListener('click', function () {
    eyeIcon.classList.toggle('closed-eye')
    if (eyeIcon.classList.contains('closed-eye')) {
      passwordInput.type = 'text'
      eyeIcon.removeClass('open-eye').addClass('opened-eye.closed-eye')
    } else {
      passwordInput.type = 'password'
    }
  })
})

// Phone Number

// Use let for variables that may be reassigned
let phoneNumberInput = document.querySelectorAll('.input_tel')

// Attach the formatPhoneNumber function to the input event

for (let i = 0; i < phoneNumberInput.length; i++) {
  phoneNumberInput[i].addEventListener('input', function () {
    formatPhoneNumber(phoneNumberInput[i])
  })
}

for (let i = 0; i < phoneNumberInput.length; i++) {
  phoneNumberInput[i].addEventListener('keydown', function (event) {
    handleBackspace(event, phoneNumberInput[i])
  })
}

function formatPhoneNumber(input) {
  // Remove non-numeric characters
  let phoneNumber = input.value.replace(/\D/g, '')

  // Format the remaining digits
  if (phoneNumber.length > 0) {
    // Format the phone number as (yy)xxx-xx-xx
    phoneNumber =
      '(' +
      phoneNumber.substring(0, 2) +
      ')' +
      phoneNumber.substring(2, 5) +
      '-' +
      phoneNumber.substring(5, 7) +
      '-' +
      phoneNumber.substring(7, 9)
  }

  // Set the formatted value back to the input
  input.value = phoneNumber
}

function handleBackspace(event, input) {
  // Check if the pressed key is the backspace key
  if (event.key === 'Backspace') {
    // Remove non-numeric characters
    let phoneNumber = input.value.replace(/\D/g, '')

    // Remove the last digit
    phoneNumber = phoneNumber.slice(0, -1)

    // Format the remaining digits
    if (phoneNumber.length > 0) {
      phoneNumber =
        '(' +
        phoneNumber.substring(0, 2) +
        ')' +
        phoneNumber.substring(2, 5) +
        '-' +
        phoneNumber.substring(5, 7) +
        '-' +
        phoneNumber.substring(7, 9)
    }

    // Set the formatted value back to the input
    input.value = phoneNumber

    // Prevent the default backspace behavior
    event.preventDefault()
  }
}

//-------- PRICE--------//

document.addEventListener('DOMContentLoaded', function () {
  let currencyCard = document.querySelector('.currency-card')
  let currencyList = document.querySelector('.currency-list')
  let currencyIcon = document.querySelector('.currency-icon')
  let currentCurrency = document.querySelector('.current-currency')
  let price = document.getElementById('price')
  let currencyOptions = document.querySelectorAll('.currency__option')

  // only Numbers can be inputted
  price.addEventListener('input', (e) => {
    const priceValue = e.target.value.replace(/\D/g, '')

    //  after every the last 3 digits , there should be an empty space
    const PriceFormat = priceValue.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')

    // remove non-numeric values
    e.target.value = PriceFormat.trim()
  })

  // Function to toggle the currency list visibility
  function toggleCurrencyList() {
    currencyList.classList.toggle("active")
    // rotate the icon when the categoryCard is clicked
    currencyIcon.classList.toggle('rotated')

    // currentCurrency.style.display='none'
  }

  // Event listener for clicking on the currency card
  currencyCard.addEventListener('click', function (event) {
    event.stopPropagation()
    toggleCurrencyList()
  })

  // Event listener for clicking on a currency option
  currencyOptions.forEach(function (option) {
    option.addEventListener('click', function (event) {
      currencyOptions.forEach((otherOption) => {
        if (otherOption != option) {
          otherOption.classList.remove('selected')
        }
      })

      event.stopPropagation()

      //Add currency__option's value into current-option
      currentCurrency.textContent = option.textContent
      option.classList.add('selected')
      toggleCurrencyList()
      currentCurrency.style.display = 'block'
      price.placeholder = `Введите сумму в ${option.innerText}`
    })
  })

  // Event listener for clicking outside the currency card
  document.addEventListener('click', function () {
    currencyList.classList.remove('active')
    currencyIcon.classList.remove('rotated')
    currentCurrency.style.display = 'block'
  })
})
