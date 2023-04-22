// Obtener todos los modales y botones de "Leer más"
let modals = document.querySelectorAll(".modal");
let buttons = document.querySelectorAll(".post .btn");

// Obtener todos los botones de "Cerrar" dentro de los modales
let spans = document.querySelectorAll(".close");

// Para cada botón de "Leer más" se agregan los siguientes eventos
buttons.forEach(function(button, index) {
  // Obtener el id del modal que corresponde al botón
  let target = button.getAttribute("data-target");
  // Agregar evento de "click" al botón de "Leer más" para mostrar el modal
  button.addEventListener("click", function() {
    let modalTitle = document.querySelector(target + " .modal-title");
    modalTitle.classList.add("animate__animated", "animate__bounceInLeft");
    document.querySelector(target).style.display = "block";
    document.querySelector(target).classList.add("show");
    document.querySelector(target + " .modal-content").classList.add("animate__animated", "animate__fadeInRight", "show");
  });

  // Agregar evento de "click" al botón de "Cerrar" dentro del modal para cerrarlo
  spans[index].addEventListener("click", function() {
    let modal = document.querySelector(target);
    document.querySelector(target).classList.remove("show");
    modal.classList.add("animate__animated", "animate__rotateOut", "animate__fadeOut");
    setTimeout(function() {
      document.querySelector(target).style.display = "none";
      document.querySelector(target).classList.remove("show");
      document.querySelector(target + " .modal-content").classList.remove("animate__animated", "animate__fadeInRight");
      modal.classList.remove("animate__animated", "animate__rotateOut", "animate__fadeOut");
    }, 1000); // El tiempo de espera en milisegundos debe ser igual a la duración de la animación
  });

  // Agregar evento de "click" al área fuera del modal para cerrarlo
  window.addEventListener("click", function(event) {
    let modal = document.querySelector(target);
    if (event.target === modal) {
      document.querySelector(target).classList.remove("show");
      modal.classList.add("animate__animated", "animate__rotateOut", "animate__fadeOut");
      setTimeout(function() {
        document.querySelector(target).style.display = "none";
        document.querySelector(target).classList.remove("show");
        document.querySelector(target + " .modal-content").classList.remove("animate__animated", "animate__fadeInRight");
        modal.classList.remove("animate__animated", "animate__rotateOut", "animate__fadeOut");
      }, 1000); // El tiempo de espera en milisegundos debe ser igual a la duración de la animación
    }
  });
});