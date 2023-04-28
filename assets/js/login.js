import CLASS_TYPES from "./classTypes.js";

const identidad = document.getElementById('login-identidad');
const clave = document.getElementById('login-clave');

identidad.addEventListener('blur', () => {
    let valorIdentidad = identidad.value.trim();
    if (valorIdentidad === '') {
      identidad.classList.remove(CLASS_TYPES.ACIERTO);
      identidad.classList.add(CLASS_TYPES.ERROR);
    }else{
      identidad.classList.remove(CLASS_TYPES.ERROR);
      identidad.classList.add(CLASS_TYPES.ACIERTO);
    }
  });
  clave.addEventListener('blur', () => {
    let valorClave = clave.value.trim();
    if (valorClave === '') {
      clave.classList.remove(CLASS_TYPES.ACIERTO);
      clave.classList.add(CLASS_TYPES.ERROR);
    }else{
      clave.classList.remove(CLASS_TYPES.ERROR);
      clave.classList.add(CLASS_TYPES.ACIERTO)
    }
  });
