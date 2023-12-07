// ------------------- Date formatter Func -----------------
export function dateFormatter(date) {
  const dateObject = new Date(date)

  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1 // Months are zero-based, so add 1
  const year = dateObject.getFullYear()

  // Format the date components as 'DD-MM-YYYY'
  const formattedDate = `${day < 10 ? '0' : ''}${day}-${
    month < 10 ? '0' : ''
  }${month}-${year}`

  return formattedDate
}

// ------------------- Numbers with space Func -------------
export function moneyFormatter(number) {
  const formattedNum = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return formattedNum
}

// ------------------- Phone num Formatter Func ------------
export function phoneNumberFormatter(phoneNumber) {
  // Remove non-digit characters from the phone number
  const cleanedNumber = phoneNumber.replace(/\D/g, '')

  // Apply the desired formatting
  const formattedNumber = `+${cleanedNumber.slice(0, 3)}-${cleanedNumber.slice(
    3,
    5,
  )}-${cleanedNumber.slice(5, 8)}-${cleanedNumber.slice(
    8,
    10,
  )}-${cleanedNumber.slice(10)}`

  return formattedNumber
}
