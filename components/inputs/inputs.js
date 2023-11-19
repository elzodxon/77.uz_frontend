"use strict";
// Password

document.addEventListener('DOMContentLoaded', function () {
  const eyeIcon = document.querySelector('.closed-eye');
  const passwordInput = document.getElementById('password');

  eyeIcon.addEventListener('click', function () {
      eyeIcon.classList.toggle('opened-eye');
      if (eyeIcon.classList.contains('opened-eye')) {
          passwordInput.type = 'text';
          eyeIcon.removeClass('closed-eye').addClass('closed-eye.opened-eye');
      } else {
          passwordInput.type = 'password';
      }
  });
});
// Phone Number
// Use let for variables that may be reassigned
let phoneNumberInput = document.getElementById("phone-number");

// Attach the formatPhoneNumber function to the input event
phoneNumberInput.addEventListener("input", function () {
    formatPhoneNumber(phoneNumberInput);
});

// Attach the handleBackspace function to the keydown event
phoneNumberInput.addEventListener("keydown", function (event) {
    handleBackspace(event, phoneNumberInput);
});

function formatPhoneNumber(input) {
    let phoneNumber = input.value.replace(/\D/g, '');

    if (phoneNumber.length > 0) {
        phoneNumber = '(' + phoneNumber.substring(0, 2) + ')' +
            phoneNumber.substring(2, 5) +
            '-' +
            phoneNumber.substring(5, 7) +
            '-' +
            phoneNumber.substring(7, 9);
    }

    input.value = phoneNumber;
}

function handleBackspace(event, input) {
    if (event.key === 'Backspace') {
        let phoneNumber = input.value.replace(/\D/g, '');

        phoneNumber = phoneNumber.slice(0, -1);

        if (phoneNumber.length > 0) {
            phoneNumber = '(' + phoneNumber.substring(0, 2) + ')' +
                phoneNumber.substring(2, 5) +
                '-' +
                phoneNumber.substring(5, 7) +
                '-' +
                phoneNumber.substring(7, 9);
        }

        input.value = phoneNumber;

        event.preventDefault();
    }
}