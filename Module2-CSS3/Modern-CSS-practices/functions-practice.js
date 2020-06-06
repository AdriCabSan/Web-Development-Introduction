const logo = document.getElementById('logo');
const button = document.querySelector('button');

function toggleOrangeGlow() {
  logo.classList.toggle('has-orange-glow');
}

button.addEventListener('click', toggleOrangeGlow);

button.addEventListener('click', event => {
  if (button.getAttribute('aria-pressed') === "false") {
    button.setAttribute('aria-pressed', 'true');
  }
  else {
    button.setAttribute('aria-pressed', 'false');
  }
});