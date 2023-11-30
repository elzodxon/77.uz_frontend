// const languageButton = document.querySelector('.language-button')
// const languageContent = document.querySelector('.language-content')

// languageButton.addEventListener('click', e => {
//   e.preventDefault()
//   languageContent.classList.toggle('active')
// })



document.addEventListener('DOMContentLoaded', function () {



  var buttons = document.querySelectorAll("#button1, #button2");

  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var contentId = 'content' + event.target.id.charAt(event.target.id.length - 1);

      buttons.forEach(function (btn) {
        btn.classList.remove('btn-active');
      });

      event.target.classList.add('btn-active');


      var allContent = document.querySelectorAll('#content-container > div');

      allContent.forEach(function (element) {
        element.classList.add('hidden');
      });


      var selectedContent = document.getElementById(contentId);

      selectedContent.classList.remove('hidden');



    });
  });
  

});


