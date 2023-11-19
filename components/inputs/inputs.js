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
Array.prototype.forEach.call(
  document.body.querySelectorAll('*[data-mask]'),
  applyDataMask
);

function applyDataMask(field) {
  var mask = field.dataset.mask.split('');

  // For now, this just strips everything that's not a number
  function stripMask(maskedData) {
    function isDigit(char) {
      return /\d/.test(char);
    }
    return maskedData.split('').filter(isDigit);
  }

  // Replace _ characters with characters from data
  function applyMask(data) {
    return mask
      .map(function (char) {
        if (char != '_') return char;
        if (data.length == 0) return char;
        return data.shift();
      })
      .join('');
  }

  function reapplyMask(data) {
    return applyMask(stripMask(data));
  }

  function changed() {
    var oldStart = field.selectionStart;
    var oldEnd = field.selectionEnd;

    field.value = reapplyMask(field.value);

    field.selectionStart = oldStart;
    field.selectionEnd = oldEnd;
  }

  field.addEventListener('click', changed);
  field.addEventListener('keyup', changed);
}
