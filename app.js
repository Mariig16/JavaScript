class Paciente{
  constructor (documento, nombre){
    this.documento = Number(documento);
    this.nombre = nombre;
  }
}
const keyLocalStorage = "listaPacientes";
document.addEventListener("DOMContentLoaded", () => {
  let pacientes = []; // El arreglo global que vamos a manejar
  
  // Declaración de elementos del DOM
  const $contenedorPacientes = document.querySelector("#contenedorPacientes"),
  $btnGuardarPaciente = document.querySelector("#btnAgregarPaciente"),
  $newPacienteDocumento = document.querySelector("#idocumento"),
  $newPacienteNombre = document.querySelector("#inombre");
  
  // Escuchar clic del botón para agregar nuevo paciente
  $btnGuardarPaciente.onclick = () => {
    const pDocument = $newPacienteDocumento.value;
    const pNombre = $newPacienteNombre.value;
    validar();
    if (bandera == true){
      if (!pDocument && pNombre) {
        return;
      }
      pacientes.push(new Paciente(pDocument, pNombre));
      $newPacienteDocumento.value = "";
      $newPacienteNombre.value = "";
      alert("Datos de: "+pNombre +" registrados correctamente")
      guardarPacientesEnLocal();
      refrescarListaDePacientes();
    }
    
  };
  
  //APLICAR OPERADOR TERNARIO Y LÓGICO OR
  function validar(){
    const pDocument = $newPacienteDocumento.value;
    const pNombre = $newPacienteNombre.value;
    const validado = (pDocument == '') || (pNombre == '') ? true : false;
    validado ? alert("Error, debe ingresar todos los datos") : bandera = true;
  }
  
  const obtenerPacientesDeAlmacenamiento = () => {
    const posibleLista = JSON.parse(localStorage.getItem(keyLocalStorage));
    
    if (posibleLista) {
      console.log(posibleLista);
      return posibleLista;
    } else {
      return [];
    }

    
  };
  
  const guardarPacientesEnLocal = () => {
    localStorage.setItem(keyLocalStorage, JSON.stringify(pacientes));
    
  };
  //Líneas posibles para eliminar registros (Validar)
  const refrescarListaDePacientes = () => {
    $contenedorPacientes.innerHTML = "";
    for (const [indice, paciente] of pacientes.entries()) {
      const $enlaceParaEliminar = document.createElement("a");
      $enlaceParaEliminar.classList.add("enlace-eliminar");
      $enlaceParaEliminar.innerHTML = "&times;";
      $enlaceParaEliminar.href = "";
      $enlaceParaEliminar.onclick = (evento) => {
        evento.preventDefault();
        if (!confirm("¿Eliminar tarea?")) {
          return;
        }
        pacientes.splice(indice, 1);
        // Guardar los cambios
        guardarTareasEnAlmacenamiento(pacientes);
        refrescarListaDeTareas();
      };
      let caja = document.createElement('tbody');
      caja.innerHTML = `<tbody><td>${paciente.documento}</td>
      <td>${paciente.nombre}</td></tbody>`;
      $contenedorPacientes.appendChild(caja);
    }
  };
  // Llamar a la función la primera vez
  
  pacientes = obtenerPacientesDeAlmacenamiento();
  refrescarListaDePacientes();

  //spread de objetos
  console.log("Hola soy la lista", ...pacientes);
  
});
