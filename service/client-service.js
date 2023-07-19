//AJAX PARA HACER LAS PETICIONES

// //funcion para traer la lista de clientes
// const listaClientes = () => {
//   //usar promesas para estas peticiones
//   const promise = new Promise((resolve, reject) => {
//     //inicalizar la clase para hacer las conexiones entre front y back
//     const http = new XMLHttpRequest();

//     //Abrir http y hacer la peticion
//     http.open("GET", "http://localhost:3000/perfil"); //metodo, url

//     //enviar la peticion
//     http.send();

//     //al cargar, trae la informacion de la peticion (la respuesta)
//     http.onload = () => {
//       const response = JSON.parse(http.response); //respuesta con la info de la api
//       console.log(response);
//       //si el status del hhtp es igual o mayot a 400
//       if (http.status >= 400) {
//         reject(response); //reyectar la respuesta
//       } else {
//         resolve(response); //resolver la respuesta
//       }
//     };
//   });

//   return promise;
// };

  //FETCH API
const listaClientes = () =>  fetch("http://localhost:3000/perfil").then((response) => response.json());

const agregarCliente = (nombre, email) => fetch("http://localhost:3000/perfil", {
  method:"POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({nombre, email,id: uuid.v4()})
});

const editarCliente = () => {
  fetch("http://localhost:3000/perfil",{

  }).then(response => console.log(response) ).catch(error => console.log(error))
}

const eliminarCliente = (id) => {
  fetch(`http://localhost:3000/perfil/${id} `, {
    method: "DELETE"
  })
}

export {
  listaClientes, agregarCliente, editarCliente, eliminarCliente
}