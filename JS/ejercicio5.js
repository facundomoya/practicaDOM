let identificador;
let segundos;
let minutos;
let horas;

do {
  horas = parseInt(prompt("HORA/S"));
  if (horas == 0) {
    minutos = parseInt(prompt("MINUTO/S"));
    segundos = 59;
    minutos--;
  } else {
    minutos = 59;
    segundos = 59;
    horas--;
  }
} while (minutos > 59 || minutos < 0 || horas < 0);

let h = document.querySelector("#hours");
let m = document.querySelector("#minutes");
let s = document.querySelector("#seconds");

if (horas != 0 && minutos != 0) {
  segundos = 59;
}

if (horas == 0) {
  segundos = 0;
  minutos++;
} else {
  minutos = 0;
  segundos = 0;
  horas++;
}

h.innerHTML = horas + ":";
m.innerHTML = minutos + ":";
s.innerHTML = segundos;

let Iniciar = () => {
  clearInterval(identificador);
  identificador = window.setInterval(function () {
    segundos--;
    if (segundos < 0) {
      minutos--;
      segundos = 59;
    }
    if (minutos < 0) {
      horas--;
      minutos = 59;
    }
    if (segundos == 0 && minutos == 0 && horas == 0) {
      h.innerHTML = "0:";
      m.innerHTML = "0:";
      s.innerHTML = "0";
      button1.className = "d-none";
      clearInterval(identificador);
      alert(
        "El cronometro llego a su fin, presione RESET para volver a empezar"
      );
    }

    h.innerHTML = horas + ":";
    m.innerHTML = minutos + ":";
    s.innerHTML = segundos;
  }, 1000);

  let button1 = document.querySelector("#boton1");
  if (button1.innerHTML == "Reanudar") {
    button1.innerHTML = "Iniciar temporizador";
    button1.className = "btn btn-primary botones";
  }
};

function Pausar() {
  clearInterval(identificador);
  let button1 = document.querySelector("#boton1");
  if (button1.innerHTML == "Iniciar temporizador") {
    button1.innerHTML = "Reanudar";
    button1.className = "btn btn-warning botones";
  }
  if (horas == "0" && minutos == "0" && segundos == "0") {
    button1.innerHTML = "Reanudar";
    button1.className = "d-none";
  }
}

function Reset() {
  clearInterval(identificador);
  let button1 = document.querySelector("#boton1");
  button1.className = "btn btn-primary botones mx-2 my-1";

  h.innerHTML = "0:";
  m.innerHTML = "0:";
  s.innerHTML = "0";

  segundos = 59;

  if (button1.innerHTML == "Reanudar") {
    button1.innerHTML = "Iniciar temporizador";
    button1.className = "btn btn-primary botones";
  }
  do {
    horas = parseInt(prompt("HORA/S"));
    if (horas == 0) {
      minutos = parseInt(prompt("MINUTO/S"));
      minutos--;
    } else {
      minutos = 59;
      horas--;
    }
  } while (minutos > 59 || minutos < 0 || horas < 0);

  if (horas == 0) {
    segundos = 0;
    minutos++;
  } else {
    minutos = 0;
    segundos = 0;
    horas++;
  }

  h.innerHTML = horas + ":";
  m.innerHTML = minutos + ":";
  s.innerHTML = segundos;
}
