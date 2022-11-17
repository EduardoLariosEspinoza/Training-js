var arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Comidas en el arreglo: " + arreglo);
var p = 0;
while (p == 0) {
  var d = parseInt(prompt('Quieres eliminar(1) un numero, cambiarlo(2) o agregar uno nuevo(3)?'));

  switch (d) {
    case 1:
      var x = parseInt(prompt("Ingresa la posicion que quieras cambiar: "));
      arreglo.splice(x, 1)

      console.log("Array: " + arreglo);
      break;

    case 2:
      var pos = parseInt(prompt("Ingresa la posicion que quieras cambiar: "));
      var e = parseInt(prompt("Ingresa el nuevo numero: "));

      arreglo.splice(p, 1, e)

      console.log("Array: " + arreglo);
      break;

    case 3:
      var nu = parseInt(prompt("Ingresa el nuevo numero: "));

      arreglo.splice((arreglo.length + 1), 1, nu)

      console.log("Array: " + arreglo);
      break;

    default:
      break;

  }
  p = prompt('Seria todo? 1-Si, 0-No: ');

}