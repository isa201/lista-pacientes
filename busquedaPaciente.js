var busqueda = document.querySelector("#buscador");
//el evento input se usa para obtener lo que se escribe dentro de la caja de texto(input)
busqueda.addEventListener("input", function () {
  //obtengo todos los valores de la tabla que tengan la clase .paciente
  //y luego lo recorro para ir creando cada paciente en una variable(paciente) por cada iteracion
  //de esta manera puede conseguir el nombre de cada paciente
  let pacientes = document.querySelectorAll(".paciente");
  //this.value es el objeto que se recibe al ejecutar el evento en este caso por el evento usado
  //se trae el valor de lo que se ingresa por teclado en el input
  console.log(this.value);

  //si this.value es mayor a 0 significa que he escrito algo en el input
  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      let tdNombre = paciente.querySelector(".nombre-paciente");
      let nombre = tdNombre.textContent;

      //filtrar con minusculas tambien
      var expresion = new RegExp(this.value, "i");

      if (!expresion.test(nombre)) {
        paciente.classList.add("invisible");
      } else {
        paciente.classList.remove("invisible");
      }

      /*
      this.value hace referencia al objeto event que trae el evento
     que en este caso el evento "input" me trae lo que voy escribiendo dentro del input de texto
     al referenciar con this.value me tre ese valor que voy ingresando por teclado
      y lo compara con el valor del nombre del paciente
      if (nombre != this.value) {
        paciente.classList.add("invisible");
      } else {
        paciente.classList.remove("invisible");
      }
      */
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
});
