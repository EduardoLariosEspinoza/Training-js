var n = parseInt(prompt("Ingresa un número: "));

Erastothenes(n);

function Erastothenes(n) {
  var primos = [];

  for (var i = 0; i < n; i++) {
    primos[i] = true;
  }

  for (var i = 2; i < n; i++) {
    for (var j = 2;
      (i * j) < n; j++) {
      primos[i * j] = false;
    }
  }

  for (var i = 2; i < n; i++) {
    if (primos[i] == true) {
      console.log(i);
    }
  }
}