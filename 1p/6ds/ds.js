var map1 = {};
var n = 100000;
var almacen = 0;
var contador = 0;
var clave = [];

function add(key, value) {
  map1[key] = value;
}
//var n = 5;
for (var contador2 = 0; contador2 < 7; contador2++) {
  for (var i = 0; i < n; i++) {
    clave[i] = Math.floor(Math.random() * 100000);
  } //Profe, al final la creacion de los numeros random la agregue de esta forma para que el contador no 
  //tomara en cuenta el tiempo que lleva crear estos numeros
  var tiempo = new Date();
  for (var j = 0; j < n; j++) {
    add((j + 1), "Persona#" + clave[j]);
  }
  var tiempof = new Date() - tiempo;
  almacen += tiempof;
  contador++;
  console.log("La corrida " + (contador + 1) + " tardó " + tiempof + " ms");
}

console.log("El tiempo promedio es: " + (almacen / 7) + " ms");
//console.log(map1)