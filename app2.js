//agregando paciente con el formulario
var button = document.querySelector(".button");

//creo un evento click y se lo asigno al boton traido con querySelector
button.addEventListener("click", (event) => {
  //prevenir recargar la pagina al tocar el boton
  event.preventDefault();

  /*
  obtengo los valores de los input con .value puede ser una opcion
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let anio = document.querySelector("#año").value;
  */
  var msj = document.querySelector("#alert");

  //obtener los datos desde el form directamente
  let form = document.querySelector("#form-paciente");
  var paciente = obtenerDatosPaciente(form);

  /*
  adiciono los valores a la tabla
  obtengo el tbody y creo un tr con createElement para agregarselo al final dentro del tbody   
  */
  var tbody = document.querySelector("tbody");

  //dentro del tr tengo que crear los td y asignarselos dentro mismo
  //asigno los valores de los input a cada td con textContent
  //con appendChild meto dentro del elemento tr los demas td
  //por ultimo al tbody le meto dentro el tr con todos los td ya incluidos con appendChild

  if (validarPaciente(paciente, msj)) {
    let tr = crearTr(paciente);
    tbody.appendChild(tr);
    console.log("Registro de paciente exitoso");
  } else {
    console.log("No se puedo registrar el paciente");
  }

  //resetear campos del formulario
  form.reset();
});

function obtenerDatosPaciente(form) {
  // creo un objeto de tipo paciente al enviar los datos del formulario
  //los puedo extraer usando el form directamente y llamando a los input desde sus respectivos name

  //validar datos del paciente
  var paciente = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    anio: form.anio.value,
  };
  return paciente;
}

function crearTr(paciente) {
  let tr = document.createElement("tr");
  crearTd(paciente, tr);
  tr.classList.add("paciente");
  return tr;
}

function crearTd(paciente, tr) {
  let tdNombre = document.createElement("td");
  tdNombre.classList.add("nombre-paciente");
  tdNombre.textContent = paciente.nombre;
  tr.appendChild(tdNombre);

  let tdApellido = document.createElement("td");
  tdApellido.classList.add("apellido-paciente");
  tdApellido.textContent = paciente.apellido;
  tr.appendChild(tdApellido);

  var tdAnio = document.createElement("td");
  tdAnio.classList.add("anio-paciente");
  tdAnio.textContent = paciente.anio;
  tr.appendChild(tdAnio);
}

function validarPaciente(paciente, mensaje) {
  if (
    paciente.nombre == "" ||
    paciente.apellido == "" ||
    paciente.nombre == ""
  ) {
    console.log(
      "Verifique que esten todos los datos ingresados en el formulario"
    );
    mensaje.textContent = "Error verifique los datos del formulario";
    mensaje.style.backgroundColor = "rgb(205, 123, 109)";
    mensaje.style.padding = "5px";
    return false;
  } else {
    mensaje.textContent = "Registro exitoso del paciente";
    mensaje.style.backgroundColor = "rgb(100, 191, 100)";
    mensaje.style.padding = "5px";
    return true;
  }
}

//Traigo todos los elementos que tengan la clase paciente
