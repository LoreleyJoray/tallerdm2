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
 

console.log("Hola pagina");
function scrollToForm() {
    var element = document.getElementById("formulario");
    element.scrollIntoView({ behavior: "smooth" });
}

//1 guarda  los elementos del formulario en variables
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var select_plataformas = document.getElementById("plataformas");

var input_submit = document.getElementById("boton-enviar");

console.log(input_nombre);
console.log(input_email);
console.log(select_plataformas);


//2 funcion que se ejecuta cuando se envia el formulario
input_submit.addEventListener("click",enviarFormulario);

function enviarFormulario(event){
    event.preventDefault();
    console.log("enviado");


//3 obtenet valores de los inputs

var valor_email = input_email.value;
var valor_nombre = input_nombre.value;
var valor_plataformas = select_plataformas.value;


console.log(valor_nombre);
console.log(valor_email);
console.log(valor_plataformas);

//4 obtener los valores de los placeholder
var placeholder_nombre=document.getElementById("nombre_placeholder");
var placeholder_email=document.getElementById("email_placeholder");

//5 cambiar el contenido de los place holder
placeholder_nombre.innerHTML= valor_nombre;
placeholder_email.innerHTML= valor_email;

//6 mostrar el feedback
elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.remove("oculto");

//7 ocultar el formulario
elemento_formulario = document.getElementById("formulario");
elemento_formulario.classList.add("oculto");

}




