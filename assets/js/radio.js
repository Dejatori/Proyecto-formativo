const radioToggle = document.querySelector('.radio-toggle');
const radioContent = document.querySelector('.radio-content');
const radioClose = document.querySelector('.radio-close');

radioToggle.addEventListener('click', function () {
  if (radioContent.classList.contains('show')) {
    radioContent.classList.remove('show');
    radioToggle.setAttribute('aria-expanded', 'false');
    radioContent.setAttribute('aria-hidden', 'true');
  } else {
    radioContent.classList.add('show');
    radioToggle.setAttribute('aria-expanded', 'true');
    radioContent.setAttribute('aria-hidden', 'false');
  }
});

radioClose.addEventListener('click', function () {
  radioContent.classList.remove('show');
  radioToggle.setAttribute('aria-expanded', 'false');
  radioContent.setAttribute('aria-hidden', 'true');
});