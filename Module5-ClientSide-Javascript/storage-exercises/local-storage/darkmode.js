// Checa si el valor 'darkmode' esta guardado en localstorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Añade la clase darkmode al body
  document.body.classList.add('darkmode');
  // 2. Actualiza el Modo Noche en el localstorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. elimina la clase darkmode del body
  document.body.classList.remove('darkmode');
  // 2. Actualizar modo Noche en localstorage
  localStorage.setItem('darkMode', null);
}
 
// Si el usuario ya visito y activo el modo Noche
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// cuando alguien le hace clic al botoncito
darkModeToggle.addEventListener('click', () => {
  // obtener las configuraciones del modo Noche
  darkMode = localStorage.getItem('darkMode'); 
  
  // lo activa sino esta activado
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // lo apaga si esta activado  
  } else {  
    disableDarkMode(); 
  }
});
