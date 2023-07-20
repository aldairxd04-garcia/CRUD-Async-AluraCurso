import { eliminarCliente, listaClientes } from "../service/client-service.js";

const tabla = document.querySelector("[data-table]");

//GENERAR CONTENIDO
const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("TR");
  const trContenido = `
  <td class="td" data-td>${nombre}</td>
  <td>${email}</td>
  <td>
      <ul class="table__button-control">
      <li>
          <a
          href="../screens/editar_cliente.html?id=${id}"
          class="simple-button simple-button--edit"
          >Editar</a
          >
      </li>
      <li>
          <button id=${id}
          class="simple-button simple-button--delete"
          type="button"
          >
          Eliminar
          </button>
      </li>
      </ul>
  </td>
`;
  // agregar el TR al div
  linea.innerHTML = trContenido;

  //extraer id del cliente
  const btnEliminar = linea.querySelector("button");
  const idUser = btnEliminar.id;
  btnEliminar.addEventListener("click", () => {
    //llamar a la funcion que hace el pedido a la api con el parametro
    eliminarClienteBtn(idUser);
  });

  return linea;
};

listaClientes() //Para usar la respuesta, que es la informacion obtenida
  .then((data) => {
    //se llama la función y despues el .then y dentro un arrow con el data(que es la respuesta)
    //dentro se puede usar la info de la respuesta para lo que se desee
    console.log(data);
    data.forEach((dato) => {
      const nuevaLinea = crearNuevaLinea(dato.nombre, dato.email, dato.id);
      tabla.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ha ocurrido un error"));

//funcion que se activa al dar click en el boton de eliminar
const eliminarClienteBtn = (id) => {
  eliminarCliente(id)
    .then(() => {})
    .catch((error) => console.log(error));
};
