// Variables de mi juego
let gameContainer = document.getElementById("game-container"); // Contenedor del juego
let startGame = document.getElementById("modal-content-game"); // Botón para iniciar el juego
let score = 0; // Puntuación del jugador
let scoreDisplay = document.getElementById("score-display"); // Elemento para mostrar la puntuación
let speed = 1; // Velocidad inicial de los huevos
let eggInterval = 3000; // Intervalo de tiempo para crear los huevos
let objective = document.getElementById("objective-game"); // Objetivo del juego
let spikes = document.createElement("div"); // Pinchos

// Estilos para las variables
spikes.className = "spikes"; // Clase CSS para los pinchos
spikes.style.position = "absolute"; // Posición absoluta para los pinchos
spikes.style.width = "100%"; // Ancho del contenedor del juego
spikes.style.height = "50px"; // Altura de los pinchos
spikes.style.bottom = "0px"; // Posición en la parte inferior del contenedor del juego
gameContainer.appendChild(spikes); // Agrega los pinchos al contenedor del juego

// Evento que abre el modal e inicia el juego
document.getElementById("modal-content-game").addEventListener("click", () => {
    let modal = document.getElementById("game-modal");
    modal.style.display = "block";
    startGame();    
});


// Función que inicia mi juego
function startGame() {
    score = 0;
    speed = 1;
    eggInterval = 3000;
    objectivemsg();
    updateScore();
  
    // Crear huevos en intervalos regulares
    let eggTimer = setInterval(function() {
      createEgg();
  
      // Si el jugador recoge 25 huevos, ganó el juego
      if (score >= 25) {
        clearInterval(eggTimer);
        endGame();
        setTimeout(() => {
          closeModal();
        }, 1000);
        felicidades();
      } else {
        // Aumentar la velocidad y reducir el intervalo de creación de huevos
        score++;
        updateScore();
        if (score % 5 === 0) {
          speed++;
          eggInterval -= 100;
        }
      }
    }, eggInterval);
  
    // Función que crea los huevos
    function createEgg() {
      let egg = document.createElement("div");
      egg.className = "egg";
      egg.style.left =
        Math.floor(Math.random() * (gameContainer.offsetWidth - 50)) + "px";
      egg.style.top = "-50px";
      gameContainer.appendChild(egg);
  
      // Función que recoge los huevos
      egg.addEventListener("click", () => {
        egg.remove();
        score++;
        updateScore();
      });
  
      // Función que hace caer los huevos
      let fallInterval = setInterval(function() {
        let eggRect = egg.getBoundingClientRect();
        let bottomOverlap =
          eggRect.bottom - gameContainer.getBoundingClientRect().bottom;
  
        // Si el huevo toca los pinchos, pierde el juego
        if (checkCollision(egg, spikes)) {
          clearInterval(fallInterval);
          egg.remove();
          endGame();
        } else if (bottomOverlap >= 0) {
          clearInterval(fallInterval);
          egg.remove();
        } else {
          egg.style.top = egg.offsetTop + speed + "px";
        }
      }, 10);
    }
  }

// Función que muestra el objetivo del juego
function objectivemsg() {
    objective.textContent = "Debes recoger 25 huevos antes de que caigan a los pinchos";
  }
  
  // Función que termina el juego
  function endGame() {
    alert("Perdiste el juego! Tu puntuación es: " + score);
  }
  
  // Función que actualiza mi puntuación
  function updateScore() {
    scoreDisplay.textContent = "Score: " + score;
  }
  
  // Función que detecta la colisión
  function checkCollision(el1, el2) {
    let rect1 = el1.getBoundingClientRect();
    let rect2 = el2.getBoundingClientRect();
  
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }
  
  // Función que cierra el modal
  function closeModal() {
    let modal = document.getElementById("game-modal");
    modal.style.display = "none";
    felicidades();
  }
  
  // Función que te felicita por haber jugado
  function felicidades() {
    alert("Fuiste curioso al darle clic a la gallinita, felicidades por haber jugado!");
  }