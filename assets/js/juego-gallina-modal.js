var gameContainer = document.getElementById("game-container");
var score = 0;
var scoreDisplay = document.getElementById("score-display");
var speed = 1;
var eggInterval = 3000;

var spikes = document.createElement("div");

spikes.className = "spikes";
spikes.style.position = "absolute";
spikes.style.width = "100%";
spikes.style.height = "50px";
spikes.style.bottom = 0;
gameContainer.appendChild(spikes);

gallinaContainer.addEventListener("click", () => {
  const modal = document.getElementById("game-modal");
  modal.style.display = "block";
  startGame();
});

function createEgg() {
  var egg = document.createElement("div");
  egg.className = "egg";
  egg.style.left =
    Math.floor(Math.random() * (gameContainer.offsetWidth - 50)) + "px";
  egg.style.top = "-50px";
  gameContainer.appendChild(egg);

  egg.addEventListener("click", () => {
    egg.remove();
    score++;
    updateScore();
  });

  var fallInterval = setInterval(function () {
    var eggRect = egg.getBoundingClientRect();
    var bottomOverlap =
      eggRect.bottom - gameContainer.getBoundingClientRect().bottom;

    if (bottomOverlap >= 0) {
      clearInterval(fallInterval);
      egg.remove();
      if (score > 0) {
        score--;
      }
      updateScore();
    } else {
      egg.style.top = egg.offsetTop + speed + "px";

      if (checkCollision(egg, spikes)) {
        clearInterval(fallInterval);
        endGame();
      }
    }
  }, 10);

  setTimeout(function () {
    clearInterval(fallInterval);
    egg.remove();
    if (score > 0) {
      score--;
    }
    updateScore();
  }, eggInterval);
}

function updateScore() {
  scoreDisplay.textContent = "Score: " + score;
}

function startGame() {
  score = 0;
  speed = 1;
  eggInterval = 3000;
  updateScore();
  var eggTimer = setInterval(function () {
    createEgg();
    if (score >= 5) {
      clearInterval(eggTimer);
      endGame();
    } else {
      score++;
      updateScore();
      if (score % 5 === 0) {
        speed++;
        eggInterval -= 500;
      }
    }
  }, eggInterval);
}

function endGame() {
  alert("Terminaste el juego! Tu puntuación es: " + score);
}

function closeModal() {
  var modal = document.getElementById("game-modal");
  modal.style.display = "none";
}

function checkCollision(el1, el2) {
  var rect1 = el1.getBoundingClientRect();
  var rect2 = el2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}