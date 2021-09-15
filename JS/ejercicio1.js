let aleatorio = document.getElementById("comenzareljuego");
let comparador;

function Adivinar() {
  comparador = Math.floor(Math.random() * 9 + 1);
  aleatorio.innerHTML = "Reiniciar";
  console.log(comparador);
}

function Enviar() {
  let ingresar = document.getElementById("azar");
  console.log(ingresar.value);
  if (comparador == ingresar.value) {
    alert("Adivinaste el número");
  } else if (comparador < ingresar.value) {
    alert("El número que ingresaste es mayor al número mágico");
  } else if (comparador > ingresar.value) {
    alert("El número que ingresaste es menor al número mágico");
  }
}
