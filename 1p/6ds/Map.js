const map1 = new Map();
var numeros = 100000;
var almacen = 0;
var contador = 0;
var clave = [];
//var numeros = 9;
for (var contador2 = 0; contador2 < 7; contador2++) {
  for (var i = 0; i < numeros; i++) {
    clave[i] = Math.floor(Math.random() * 100000);
  } //Profe, al final la creacion de los numeros random la agregue de esta forma para que el contador no 
  //tomara en cuenta el tiempo que lleva crear estos numeros
  var tiempo = new Date();
  for (var j = 0; j < numeros; j++) {
    map1.set((j + 1), "Persona#" + clave[j]);
  }
  var tiempof = new Date() - tiempo;
  almacen += tiempof;
  contador++;
  console.log("La corrida " + (contador) + " tardó: " + tiempof + " milisegundos");
}
almacen /= 7

console.log("En promedio cada corrida tomó " + almacen + " milisegundos");
//console.log(map1);