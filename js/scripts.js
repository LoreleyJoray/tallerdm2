/*@font-face {
    font-family: "Raleway";
    src: url('/tipografias/Raleway/Raleway-VariableFont_wght.ttf') format('truetype'); 
  }
  @font-face {
    font-family: "Iter";
    src: url('/tipografias/Inter/Inter-VariableFont_slnt,wght.ttf') format('truetype');
  }
  @font-face {
    font-family: "Roboto";
    src: url('../tipografias/Roboto/Roboto-Black.ttf') format('truetype');
  }*/

var formulario = document.getElementById("formulario");

function scrollToForm() {
  formulario.scrollIntoView({ behavior: "smooth" });
}

function enviarFormulario(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Cargar datos del Formulario y enviarlos al modal
  document.getElementById("nombre_modal").textContent = document.getElementById("nombre").value;
  document.getElementById("email_modal").textContent = document.getElementById("email").value;

  // Cambia la visualizacion del formulario
  formulario.classList.add("oculto");

  // Crea modal en JS y lo muestro
  var modalEnvioExitoso = new bootstrap.Modal(document.getElementById('envio_exitoso'));
  modalEnvioExitoso.show();
}

// Agrega el Listener al evento "submit" del formulario, y ejecuta la funcion
formulario.addEventListener('submit', enviarFormulario);







