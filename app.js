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
    if (!pDocument && pNombre) {
      return;
  }
  pacientes.push({
    document: pDocument, 
    nombre: pNombre,
    terminada: false,
  });
  $newPacienteDocumento.value = "";
  $newPacienteNombre.value = "";
  guardarPacientesEnLocal();
  refrescarListaDePacientes();
  
  };
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
      caja.innerHTML = `<tbody><td>${paciente.document}</td>
                        <td>${paciente.nombre}</td></tbody>`;
      $contenedorPacientes.appendChild(caja);
		}
  };
	// Llamar a la función la primera vez
  
	pacientes = obtenerPacientesDeAlmacenamiento();
	refrescarListaDePacientes();
  console.log("Hola soy la lista", pacientes);

});
