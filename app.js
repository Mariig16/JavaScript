// DESAFÍO #1 COMPLEMENTARIO
// let entrada = prompt("Ingresar el Nombre del estudiante\n Presione ESC para abanodar");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//   let porc_n = 0;
//   let nota_final = 0;
//   for (let i = 1; i <= 3; i++){
//     let nota = prompt("Ingresar la calificación N°:" +i);
//     if (i == 1)
//     {
//       porc_n = nota * 0.2;
//     }
//     if (i == 2)
//     {
//       porc_n = nota * 0.3;
//     }
//     if (i == 3)
//     {
//       porc_n = nota * 0.5;
//     }
//     
//   }
//   alert("La nota final del estudiante "+entrada+" es:"+nota_final);
//   entrada = prompt("Ingresar el Nombre del estudiante\n Presione ESC para abanodar");
// }

// DESAFÍO #1 ENTREGABLE

function simulador1 (tipo, b, h){
  if(tipo == 2){
    let area = b * h / 2;
    return area;
  }
  if(tipo == 3){
    let area = b * h;
    return area;
  }
  if(tipo == 4){
    let b2 = prompt("Ingrese la base 2 del trapecio");
    let area = b * b2 / 2 * h;
    return area;
  }
}
function simulador2(tipo){
  let lado = 0;
  let x;
  let y;
  for(var i = 1; i <= 2; i++){
    lado = prompt("Ingrese el lado: " +i+ " del cuadrado");
    if (i == 1){
      x = lado;
    } 
    if (i == 2){
      y = lado;
    } 
  }
  let area = x * y;
  return area;
}
alert("BIENVENIDOS A SIMULADOR DE ÁREAS EN CUERPOS GEOMÉTRICOS");
let figura = prompt("Elija la figura geométrica que desea calcular el área: \n 1. Cuadrado \n 2. Triángulo \n 3. Rectángulo \n 4. Trapecio");
  if(figura !=  1){
  let altura = prompt("Ingrese la altura de la figura");
  let base = prompt("Ingrese la base de la figura");
  alert("El área de la figura seleccionada es: "+simulador1(figura, base, altura));
  }
  else{
  alert("El área de la figura seleccionada es: "+simulador2(figura));
  }
 
