var p = 0
class CArray {
  constructor(numElements) {
    this.numElements = numElements;
    this.array = null;
  }
  setData() {
    this.array = Array.from({ length: this.numElements }, () => Math.floor(Math.random() * this.numElements));
    return this.array;
  }

  pila() {
    var newArray = this.array.slice();
    for (var i = 0; i < this.numElements; i++) {
      for (var j = 0; j < this.numElements - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          newArray.push(j);
          p++
        }
      }
    }
  }

}

var myNums = new CArray(10000);
myNums.setData();
var start = new Date().getTime();
myNums.pila();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("El tiempo para agregar 10,000 elementos a la pila fue de : " + elapsed +
  " milisegundos." + " Y tomo " + p + " pasos");