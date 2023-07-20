import { datosClientes, editarCliente } from "../service/client-service.js";

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //INICIAR CLASE URL
  const url = new URL(window.location);
  //extraer el parametro de la url con base a su nombre
  const param = url.searchParams.get("id");
  editarCliente(nombre.value, email.value, param).then(() => {
    window.location.href = "/screens/registro_completado.html";
  });
});

const obtenerDatos = async () => {
  //INICIAR CLASE URL
  const url = new URL(window.location);
  //extraer el parametro de la url con base a su nombre
  const param = url.searchParams.get("id");

  if (!param) {
    window.location.href = "/screens/error.html";
  }

  const perfil = await datosClientes(param);

  nombre.value = perfil.nombre;
  email.value = perfil.email;
};

obtenerDatos();
