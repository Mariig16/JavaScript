class Paciente{
  constructor (id_usuario, nombre, apellido, procedimiento, costo){
    this.id_usuario = Number(id_usuario);
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.procedimiento = procedimiento.toUpperCase();
    this.costo = Number(costo);
  }
}

const paciente = [];

let id_usuario = prompt("Ingrese el id del usuario");
let nombre = prompt("Ingrese el nombre del paciente");
let apellido = prompt("Ingrese el apellido del paciente");
let procedimiento = prompt("Ingrese el procedimiento que se realizó el paciente");
let costo = prompt("Ingrese el costo del procedimiento");

paciente.push(new Paciente(id_usuario, nombre, apellido, procedimiento, costo));

for (const info of paciente){
  alert("La información guardada del paciente es: \n"+info.id_usuario+"\n" +info.nombre+"\n"+info.apellido+"\n"+info.procedimiento+"\n"+info.costo);
  console.log(info.id_usuario);
  console.log(info.nombre);
  console.log(info.apellido);
  console.log(info.procedimiento);
  console.log(info.costo);
}