//Eduardo Larios Espinoza
class Cell {
  constructor(content) {
    this.content = content;
    this.previous = null;
  }
}

class CArray {
  constructor(numElements) {
    this.numElements = numElements;
    this.pila = null;
  }

  createStack() {
    var temp_cell_1 = new Cell(Math.floor(Math.random() * this.numElements))

    for (var i = 0; i < this.numElements - 1; i++) {
      var temp_cell_2 = new Cell(Math.floor(Math.random() * this.numElements))
      temp_cell_2.previous = temp_cell_1;
      temp_cell_1 = temp_cell_2;
      p++;
    }

    return temp_cell_1;
  }

}
var p = 0
var myNums = new CArray(10000);
var x = myNums.createStack();
var start = new Date().getTime();
myNums.createStack();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("El tiempo para agregar 10,000 elementos a la pila fue de : " + elapsed +
  " milisegundos." + " Y tomo " + p + " pasos");
console.log(x);