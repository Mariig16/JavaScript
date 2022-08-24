class Paciente{
  constructor (documento, nombre, apellido, telefono, procedimiento, costo){
    this.documento = Number(documento);
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.telefono = Number(telefono);
    this.procedimiento = procedimiento.toUpperCase();
    this.costo = Number(costo);
  }
}

function  pago() {
  return this.costo - this.costo * 0.10 ;
}
function consulta(){
  for (const info of paciente){
    alert("La información guardada del paciente es: \n"+info.id_usuario+"\n" +info.nombre+"\n"+info.apellido+"\n"+info.procedimiento+"\n"+info.costo);
    console.log(info.id_usuario);
    console.log(info.nombre);
    console.log(info.apellido);
    console.log(info.procedimiento);
    console.log(info.costo);
  }
}

let datoRegistro = document.getElementById('datoRegistro')
const paciente = [];

do{
  var resp = prompt("Si desea ingresar al sistema un paciente, presione 1.\nSi desea consultar pacientes guardados, presione 2\nSi desea salir del sistema presione 0");
  if (resp == 0){
    break;
  }
  else{
    if (resp == 1){
      documento = prompt("Ingrese número de documento de identidad del paciente");
      nombre = prompt("Ingrese el nombre del paciente");
      apellido = prompt("Ingrese el apellido del paciente");
      telefono = prompt("Ingrese el número telefónico del paciente");
      procedimiento = prompt("Ingrese el procedimiento que se realizó el paciente");
      costo = prompt("Ingrese el costo del procedimiento registrado");
      paciente.push(new Paciente(documento, nombre, apellido, telefono, procedimiento, costo));
      alert("La información guardada del paciente es: \nDocumento: "+documento+"\nNombre:" +nombre+"\nApellido: "+apellido+"\nTeléfono: "+telefono+"\nProcedimiento: "+procedimiento+"\nCosto: "+costo);
      alert("El paciente debe pagar: "+ pago());
    }
    if (resp == 2){
      for (let i = 0; i < paciente.length; i++){
        registros = i + 1;
      }
      const consulta = paciente.map(dato => dato.nombre);
      alert("Se encuentran registrados: "+ registros +" pacientes. \nLlamados: "+consulta);
      for (const info of paciente){
        let caja = document.createElement('div');
        caja.innerHTML = `<p>Documento: ${info.documento}<p>
                          <p>Nombre: ${info.nombre}</p>
                          <p>Apellido: ${info.apellido}</p>
                          <p>Teléfono: ${info.telefono}</p>
                          <p>Procedimiento: ${info.procedimiento}</p>
                          <p>Costo: ${info.costo}</p>`;
        datoRegistro.appendChild(caja);
      }
    }
  }
}while(resp != 0)