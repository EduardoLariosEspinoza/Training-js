var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
console.log("0");
for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (var j = 1; j < fibonacci.length; j++) {
  console.log(fibonacci[j]);
}