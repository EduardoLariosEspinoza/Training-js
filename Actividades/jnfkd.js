let array = [1, 2, 3, 4, 5];
console.log(array);
console.log("\n");

Array.prototype.insertAt = function(index, item) {
  this.splice(index, 0, item);
}

var pos = parseInt(prompt("Ingrese la posicion a insertar: "));
var camb = parseInt(prompt("Ingrese numero a insertar: "));

array.insertAt(pos, camb);

console.log("\n");
console.log(array);