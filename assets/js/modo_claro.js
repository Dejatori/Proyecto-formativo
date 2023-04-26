const botonModoClaro = document.getElementById("boton-modo-claro");
const hojaEstiloModoClaro = document.getElementById("modo-claro");

botonModoClaro.addEventListener("click", function() {
  if (hojaEstiloModoClaro.disabled) {
    hojaEstiloModoClaro.disabled = false;
  } else {
    hojaEstiloModoClaro.disabled = true;
  }
});