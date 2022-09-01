class Paciente{
  constructor (documento, nombre){
    this.documento = Number(documento);
    this.nombre = nombre;
  }
}
const paciente = [];


//Defino el DOM
let formulario = document.getElementById("formu");
formulario.addEventListener('submit', datosFormu);

//validar que se ingresen datos
function validar(){
  documentoP = formu.children[1].value;
  nombreP = formu.children[2].value;
  if (documentoP == '' || nombreP == ''){
    alert("Error, debe ingresar todos los datos");
    bandera = false;
  }else{
    bandera = true;
  }
}

function datosFormu(e){
  e.preventDefault();
  validar();
  if (bandera == true){
    let formu = e.target;
    paciente.push(new Paciente(documentoP, nombreP));
    formu.children[1].value = '';
    formu.children[2].value = '';
    let mydataJson = JSON.stringify(paciente);
    localStorage.setItem("mydata", mydataJson);
    console.log(paciente);
    agregarPaciente();
  }
}

function agregarPaciente(){
    let mydataJson = localStorage.getItem(paciente);
    let mydata = JSON.parse(mydataJson);
    let caja = document.createElement('tbody');
    caja.innerHTML = `<tbody><td>${mydata.documentoP}</td>
                      <td>${nombreP}</td></tbody>`;
    tabla.appendChild(caja);

}