let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let nota5 = 0;
let numeronotas = Number(prompt("ingrese numero de notas a promediar no mayor a 5"))
function promedio(numeronotas){
  if (numeronotas <= 1){
    return "el valor debe ser mayor a 1";
  }else if(numeronotas == 2){
    let nota1 = Number(prompt("ingrese nota 1"))
    let nota2 = Number(prompt("ingrese nota 2"))
        return (nota1 + nota2)/2;
  }else if(numeronotas == 3){
    let nota1 = Number(prompt("ingrese nota 1"))
    let nota2 = Number(prompt("ingrese nota 2"))
    let nota3 = Number(prompt("ingrese nota 3"))
        return (nota1 + nota2 +nota3)/3;
  }else if(numeronotas == 4){
    let nota1 = Number(prompt("ingrese nota 1"))
    let nota2 = Number(prompt("ingrese nota 2"))
    let nota3 = Number(prompt("ingrese nota 3"))
    let nota4 = Number(prompt("ingrese nota 4"))
        return (nota1 + nota2 + nota3 + nota4)/4;
  }else (numeronotas == 5);{
    let nota1 = Number(prompt("ingrese nota 1"))
    let nota2 = Number(prompt("ingrese nota 2"))
    let nota3 = Number(prompt("ingrese nota 3"))
    let nota4 = Number(prompt("ingrese nota 4"))
    let nota5 = Number(prompt("ingrese nota 5"))
        return (nota1 + nota2 + nota3 + nota4 + nota5)/5;
  }
}

  console.log(promedio(numeronotas))


