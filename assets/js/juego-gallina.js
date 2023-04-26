// Obtener el contenedor de la gallina
const gallinaContainer = document.getElementById('gallina-container');

// Agregar la clase "active" cada vez que aparezca la gallina
gallinaContainer.addEventListener('gallina-animationiteration', () => {
  gallinaContainer.classList.add('active');
});

// Generar una posición aleatoria cada vez que la gallina aparezca
function generateRandomPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const x = Math.floor(Math.random() * (screenWidth - 100));
  const y = Math.floor(Math.random() * (screenHeight - 100));
  return { x, y };
}

// Actualizar la posición de la gallina
function updateGallinaPosition() {
  const position = generateRandomPosition();
  gallinaContainer.style.top = position.y + 'px';
  gallinaContainer.style.left = position.x + 'px';
}

// Actualizar la posición de la gallina cada vez que se active la animación
gallinaContainer.addEventListener('gallina-animationiteration', () => {
  updateGallinaPosition();
});

// Actualizar la posición de la gallina al cargar la página
updateGallinaPosition();
