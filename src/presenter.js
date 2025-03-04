import saludar from "./saludador.js";
import saludohorario from "./saludohorario.js";
 
const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const genero_select = document.querySelector("#genero");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombre_input.value;
  const genero = genero_select.value;

  div.innerHTML = "<p> Hola " + saludohorario() + saludar(nombre,genero) + ".</p>";
});
