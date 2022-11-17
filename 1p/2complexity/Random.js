class CArray {
  constructor(numElements) {
    this.numElements = numElements;
    this.array = null;
  }
  setData() {
    this.array = Array.from({ length: this.numElements }, () => Math.floor(Math.random() * this.numElements));
    return this.array;
  }
}
var n = prompt('Cuantos numeros quieres?: ');
n = parseInt(n);
var myNums = new CArray(n);
myNums.setData();
/*
class CArray {
  constructor(numElements) {
    this.numElements = numElements;
    this.array = null;
  }
  setData() {
    this.array = Array.from({ length: this.numElements }, () => Math.floor(Math.random() * this.numElements));
    return this.array;
  }
}
var n = parseInt(prompt('Cuantos numero quieres?: '));
var myNums = new CArray(n);
myNums.setData();
console.log(myNums);
*/