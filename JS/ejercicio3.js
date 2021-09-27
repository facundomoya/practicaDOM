function obtenerFecha() {
  let time = new Date();
  console.log(time);
  console.log(time.getMonth());
  console.log(time.getDay()); //0-6 corresponde a los dias de la semana (en numero)
  console.log(time.getDate()); // corresponde a 1-30 es decir el numero del dia del mes
  console.log(time.getFullYear());
  console.log(time.getHours());
  console.log(time.getMinutes());
  console.log(time.getSeconds());

  let fecha = document.querySelector("#fecha");
  let hora = document.querySelector("#hora");

  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  fecha.innerHTML = `${diasSemana[time.getDay()]} ${time.getDate()} de ${
    meses[time.getMonth()]
  } del ${time.getFullYear()}`;

  let segundos = time.getSeconds();
  let minutos = time.getMinutes();
  let horas = time.getHours();

  if (segundos < 10) {
    //agregar un cero delante del numero
    segundos = "0" + segundos;
  }

  if (minutos < 10) {
    //agregar un cero delante del numero
    minutos = "0" + minutos;
  }

  let periodo = "AM";

  if (horas == 12) {
    horas = 12;
    periodo = "PM";
  } else if (horas == 13) {
    horas = 1;
    periodo = "PM";
  } else if (horas == 14) {
    horas = 2;
    periodo = "PM";
  } else if (horas == 15) {
    horas = 3;
    periodo = "PM";
  } else if (horas == 16) {
    horas = 4;
    periodo = "PM";
  } else if (horas == 17) {
    horas = 5;
    periodo = "PM";
  } else if (horas == 18) {
    horas = 6;
    periodo = "PM";
  } else if (horas == 19) {
    horas = 7;
    periodo = "PM";
  } else if (horas == 20) {
    horas = 8;
    periodo = "PM";
  } else if (horas == 21) {
    horas = 9;
    periodo = "PM";
  } else if (horas == 22) {
    horas = 10;
    periodo = "PM";
  } else if (horas == 23) {
    horas = 11;
    periodo = "PM";
  }

  if (horas < 10) {
    //agregar un cero delante del numero
    horas = "0" + horas;
  }

  hora.innerHTML = `${horas}:${minutos}:<text class="seconds"><text class="pm">${periodo}</text><text class="seg">${segundos}</text></text>`;

  fecha.className = "fecha titulo1";
  hora.className = "hora titulo2";
}

window.setInterval(obtenerFecha, 1000);
