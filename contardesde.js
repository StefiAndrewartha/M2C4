function contarDeA_n(intervalo,limite) {
  //contarHasta = 20
  //contar De = 3
  // 1-4-7-10-13-16-19
  for(let i = 1; i <= limite; i += intervalo){
    console.log(i);
  }
}
let intervalo = parseInt(prompt("Ingrese el intervalo"));
let limite = parseInt(prompt("Ingrese el Limite"));
contarDeA_n(intervalo, limite);