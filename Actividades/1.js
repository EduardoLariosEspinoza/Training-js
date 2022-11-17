var p = 0
var a = 0
class CArray {
  constructor(numElements) {
    this.numElements = numElements;
    this.array = null;
  }
  setData() {
    this.array = Array.from({ length: this.numElements }, () => Math.floor(Math.random() * this.numElements));
    return this.array;
  }
  swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
    //var array2 = this.array.slice()
  }
  bubbleSort() {
    var newArray = this.array.slice();
    for (var i = 0; i < this.numElements; i++) {
      for (var j = 0; j < this.numElements - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          this.swap(newArray, j, j + 1);
          p++
        }
      }
    }
  }
  selectionSort() {
    var newArray = this.array.slice();
    var length = this.numElements,
      indexMin;
    for (var i = 0; i < length - 1; i++) {
      indexMin = i;
      for (var j = i; j < length; j++) {
        if (newArray[indexMin] > newArray[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        this.swap(newArray, i, indexMin);
        a++
      }
    }
  }

}

var myNums = new CArray(10000);
myNums.setData();
var start = new Date().getTime();
myNums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("El tiempo para ordenar, con bubble, " +
  10000 + " elementos fue: " + elapsed + " milisegundos." + " Y tomo " + p + " pasos");
start = new Date().getTime();
myNums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("El tiempo para ordenar, con selection, " +
  10000 + " elementos fue: " + elapsed + " milisegundos." + " Y tomo " + a + " pasos");