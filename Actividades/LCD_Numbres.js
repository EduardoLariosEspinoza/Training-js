/* class LCD {
  verticalDer() {
    return "  |";
  }

  horizontal() {
    return " _";
  }

  ele() {
    return "|_";
  }

  silla() {
    return " _|";
  }

  letraU() {
    return "|_|";
  }

  once() {
    return "| |";
  }

  ret() {
    return "hola";
  }
}

let numero = 2;
let numerosArray = numero.toString().split('');
let ancho = 2;
let alto = 3;
let aux;
//let numeroAux = numero;
//let numerosArray = [5, 9, 2];

/* for (let i = 0; i < 1000; i++) {
  if (numero % 10 >= 1) {
    numerosArray.push(numero % 10);
    numeroAux /= 10;
  }
}
for (let i = 0; i < numerosArray.length; i++) {
  switch (numerosArray[i]) {
    case '0':
      const cero = new LCD();
      aux += cero.horizontal();
      aux += cero.once();
      aux += cero.letraU();
      console.log(aux, "\n");
      break;

    case '1':
      const uno = new LCD;
      aux += uno.verticalDer();
      aux += uno.verticalDer();
      console.log(aux, "\n");
      break;

    case '2':

      const dos = new LCD();

      for (let i = 0; i < alto + 1; i++) {

        //auxFor += dos.horizontal();
        //console.log(auxFor, "\n");
      }
      aux += dos.horizontal();
      aux += dos.silla();
      aux += dos.ele();
      console.log(aux, "\n");
      break;

    case '3':
      const tres = new LCD();
      aux += tres.horizontal();
      aux += tres.silla();
      aux += tres.silla();
      console.log(aux, "\n");
      break;

    case '4':
      const cuatro = new LCD();
      aux += cuatro.letraU();
      aux += cuatro.verticalDer();
      console.log(aux, "\n");
      break;

    case '5':
      const cinco = new LCD();
      aux += cinco.horizontal();
      aux += cinco.ele();
      aux += cinco.silla();
      console.log(aux, "\n");
      break;

    case '6':

      const seis = new LCD();
      aux += seis.horizontal();
      aux += seis.ele();
      aux += seis.letraU();
      console.log(aux, "\n");
      break;

    case '7':

      const siete = new LCD();
      aux += siete.horizontal();
      aux += siete.verticalDer();
      aux += siete.verticalDer();
      console.log(aux, "\n");
      break;

    case '8':
      const ocho = new LCD();
      aux += ocho.horizontal();
      aux += ocho.letraU();
      aux += ocho.letraU();
      console.log(aux, "\n");
      break;

    case '9':
      const nueve = new LCD();
      aux += nueve.horizontal();
      aux += nueve.letraU();
      aux += nueve.verticalDer();
      console.log(aux, "\n");
      break;

    default:
      break;
  }
} */