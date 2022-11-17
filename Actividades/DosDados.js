let cara;
let cara2;

let resultados = [];

for (let i = 0; i < 10; i++) {

  cara = 1 + Math.floor(Math.random() * 6)
  cara2 = 1 + Math.floor(Math.random() * 6)

  resultados[i] = { cara, cara2 };

}

for (let i = 0; i < 10; i++) {

  console.log(resultados[i]);

}