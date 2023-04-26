import { CLASS_TYPES } from "./classTypes.js";

const usuario = document.getElementById('registro-usuario');
const correo = document.getElementById('registro-correo');
const contraseña = document.getElementById('registro-contraseña');
const contraseña2 = document.getElementById('registro-contraseña2');

usuario.addEventListener('blur', () => {
  let valorUsuario = usuario.value.trim();
  if (valorUsuario === '') {
    usuario.classList.remove(CLASS_TYPES.ACIERTO);
    usuario.classList.add(CLASS_TYPES.ERROR);
  }else{
    usuario.classList.remove(CLASS_TYPES.ERROR);
    usuario.classList.add(CLASS_TYPES.ACIERTO)
  }
});
correo.addEventListener('blur', () => {
  let valorCorreo = correo.value.trim();
  if (valorCorreo === '') {
    correo.classList.remove(CLASS_TYPES.ACIERTO);
    correo.classList.add(CLASS_TYPES.ERROR);
  }else{
    correo.classList.remove(CLASS_TYPES.ERROR);
    correo.classList.add(CLASS_TYPES.ACIERTO)
  }
});
contraseña.addEventListener('blur', () => {
  let valorContraseña = contraseña.value.trim();
  if (valorContraseña === '') {
    contraseña.classList.remove(CLASS_TYPES.ACIERTO);
    contraseña.classList.add(CLASS_TYPES.ERROR);
  }else{
    contraseña.classList.remove(CLASS_TYPES.ERROR);
    contraseña.classList.add(CLASS_TYPES.ACIERTO)
  }
});
contraseña2.addEventListener('blur', () => {
  let valorContraseña2 = contraseña2.value.trim();
  if (valorContraseña2 === '') {
    contraseña2.classList.remove(CLASS_TYPES.ACIERTO);
    contraseña2.classList.add(CLASS_TYPES.ERROR);
  }else{
    contraseña2.classList.remove(CLASS_TYPES.ERROR);
    contraseña2.classList.add(CLASS_TYPES.ACIERTO)
  }
});

const Usuarios = [
  "jorge"
];