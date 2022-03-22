var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("click", (event) => {
  //se le agrega una animacion al elemento que se va a borrar
  //agregandole una clase cuando se ejecute el evento
  event.target.parentNode.classList.add("delete");

  //el event es el objeto evento que se obtiene al ejecutarlo y target es donde se producers
  //es decir el html donde ocurre ese evento
  //con un setTimeout se le da un tiempo al borrado se le pasa una funcion y despues el tiempo
  //el tiempo permite animarlo con una transicion en css que hace que se vea mejor
  setTimeout(() => {
    event.target.parentNode.remove();
  },500);
});
