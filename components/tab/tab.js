document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('languageToggle');
  const ruText = document.querySelector('.language-switcher__text--ru');
  const engText = document.querySelector('.language-switcher__text--eng');

  toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
      // English is selected
      ruText.style.color = '#fff';
      engText.style.color = '#000';
    } else {
      // Russian is selected
      ruText.style.color = '#000';
      engText.style.color = '#fff';
    }
  });
});
