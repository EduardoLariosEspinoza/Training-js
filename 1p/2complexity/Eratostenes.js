var a = prompt('Ingresa el numero maximo: ')

function eratostenes(n) {
  var array = [],
    lm = Math.sqrt(n),
    output = [];
  for (var i = 0; i < n; i++) {
    array.push(true);
  }
  for (var i = 2; i <= lm; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }
  for (var i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i);
    }
  }
  return output;
}
console.log(eratostenes(a))

/*
readline.question('Who are you?', a => {
  parseInt(a, 10);
  console.log(a * 2);
  readline.close();
});
*/