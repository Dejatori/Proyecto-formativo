// // Obtener la sección "post" y agregarle un evento "click"
// var posts = document.getElementsByClassName("post");
// for (var i = 0; i < posts.length; i++) {
// 	posts[i].addEventListener("click", function() {
// 		// Obtener el contenido del post y mostrarlo en un cuadro de diálogo
// 		var content = this.querySelector("p").innerHTML;
// 		alert(content);
		
// 		// Agregar una clase "selected" al post seleccionado para resaltarlo
// 		this.classList.add("selected");
		
// 		// Quitar la clase "selected" de los demás posts para deseleccionarlos
// 		for (var j = 0; j < posts.length; j++) {
// 			if (j != i) {
// 				posts[j].classList.remove("selected");
// 			}
// 		}
// 	});
// }

var modal = document.getElementById("myModal");
var modal = document.getElementById("myModal2");
var btn = document.querySelector(".post .btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}