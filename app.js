let entrada = prompt("Ingresar el Nombre del estudiante\n Presione ESC para abanodar");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
  let porc_n = 0;
  let nota_final = 0;
  for (let i = 1; i <= 3; i++){
    let nota = prompt("Ingresar la calificación N°:" +i);
    if (i == 1)
    {
      porc_n = nota * 0.2;
    }
    if (i == 2)
    {
      porc_n = nota * 0.3;
    }
    if (i == 3)
    {
      porc_n = nota * 0.5;
    }
    nota_final += porc_n;
  }
  alert("La nota final del estudiante "+entrada+" es:"+nota_final);
  entrada = prompt("Ingresar el Nombre del estudiante\n Presione ESC para abanodar");
}
