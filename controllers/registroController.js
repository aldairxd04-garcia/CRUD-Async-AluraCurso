import { agregarCliente } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
const nombre = document.querySelector("[data-nombre]");
const correo = document.querySelector("[data-email]");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(nombre.value, correo.value);
  agregarCliente(nombre.value, correo.value)
    .then(() => window.location.href = "/screens/registro_completado.html")
    .catch((error) => console.log(error));
});
