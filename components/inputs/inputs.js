"use strict";
// Password
const closedEye=document.querySelector('.closed-eye');
const currentPassword=document.getElementById('password');
closedEye.addEventListener('click',()=>{
  currentPassword.
})
// window.addEventListener('DOMContentLoaded',function(){
//   const closedEye=document.querySelector('.closed-eye');
//   const currentPassword=document.getElementById('password');

//   closedEye.addEventListener('click',()=>{
//     closedEye.classList.toggle('opened-eye');
//     function togglePassword(){
//       if(currentPassword.type==="password"){
//         currentPassword.type="text"
//       }
//       togglePassword()
      // else{
        // currentPassword.type==="password";
        // closedEye.innerHTML=closedEye
      // }
    // }
    // currentPassword.type==="text"
//   })
// })

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
