var buscarPacientes = document.querySelector("#buscar-paciente");
buscarPacientes.addEventListener("click", () => {
  var tbody = document.querySelector("tbody");

  /*
  OBJETO XMLHttpRequest sirve para hacer las peticiones
  */
  var xhr = new XMLHttpRequest();

  //metodo para abrir la peticion o requesiscion (metodo a usar,url)
  xhr.open(
    "GET",
    "https://alura-es-cursos.github.io/api-pacientes/pacientes.json"
  );

  //le asigno un evento load
  xhr.addEventListener("load", () => {
    //creo alerta para el caso en el que no se conecte correctamente con la url la peticion
    var error = document.querySelector("#alert-ajax");

    //en este evento se muestra como mostrar los datos del json que trae la peticion con el metodo responseText
    //los datos seran almacenados en la variable respuestas
    if (xhr.status == 200) {
      //si no se produce ningun error la alerta seguira invisible
      error.classList.add("invisible");

      //parsear de STRING a JSON porque lo que se obtiene con la peticion es un STRING
      //de esta manera se transformara el JSON en un arreglo con todos los pacientes
      var repuestas = xhr.responseText;
      let pacientes = JSON.parse(repuestas);

      
      var msj = document.querySelector("#alert");

      //una vez adicionados a la variable se puede recorrer objeto por objeto e ir adicinonandolo a la tabla
      pacientes.forEach((elemento) => {
        if (validarPaciente(elemento, msj)) {
          let tr = crearTr(elemento);
          tbody.appendChild(tr);
          console.log("Registro de paciente exitoso");
        } else {
          console.log("No se puedo registrar el paciente");
        }
      });
    } else {
      error.classList.remove("invisible");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });

  //metodo para enviar lo capturado
  xhr.send();
});
