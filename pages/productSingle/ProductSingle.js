import { phoneNumberFormatter } from '../../utils/utils.js'

const phoneNumberElement = document.querySelectorAll('.product-single__number')
const formattedPhoneNumber = phoneNumberFormatter('+998712007007')

phoneNumberElement.forEach((element) => {
  element.innerHTML = formattedPhoneNumber
})
