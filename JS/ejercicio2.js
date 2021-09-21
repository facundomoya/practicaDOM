class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }

  // Metodos

  mostrarDatos() {
    let datosImpresos = document.getElementById("datosImpresos");

    datosImpresos.innerHTML = `
      <h1 class="display-4 mb-4">Datos de la persona</h1>
      <div class="lead">
        <p>Nombre: ${this.nombre}</p>
        <p>Edad: ${this.edad}</p>
        <p>DNI: ${this.dni}</p>
        <p>Sexo: ${this.sexo}</p>
        <p>Peso: ${this.peso}</p>
        <p>Altura: ${this.altura}</p>
        <p>Año de nacimiento: ${this.nacimiento}</p>
      </div>
      `;
  }

  esMayordeEdad() {
    if (this.edad >= 18) {
      alert("La persona es mayor de edad");
    } else if (this.edad < 18) {
      alert("La persona no es mayor de edad");
    } else {
      alert("La edad ingresada no existe");
    }
  }

  mostrarGeneracion() {
    if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
      alert(
        "La generación a la que pertenece es la GENERACION Z y su rasgo caracteristico es la irreverencia"
      );
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      alert(
        "La generación a la que pertenece es la GENERACION Y (millennials) y su rasgo caracteristico es la frustación"
      );
    } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      alert(
        "La generación a la que pertenece es la GENERACION X y su rasgo caracteristico es la obsesión por el éxito"
      );
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      alert(
        "La generación a la que pertenece es la Baby Boom y su rasgo caracteristico es la ambición"
      );
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      alert(
        "La generación a la que pertenece es la Silent Generation(los niños de la posguerra y su rasgo caracteristico es la austeridad"
      );
    }
  }
}

//Creo una variable global para guardar aqui la persona creada
let nuevaPersona;

// Funcion para crear y mostrar el objeto en pantalla
let CrearMostrarPersona = () => {
  //Un boton de tipo submit por defecto tiene un evento que es validar los datos de los inputs y recargar la pagina luego de presionarlo, como no queremos que eso ocurra ya que si se actualiza la pagina borraria nuestros datos escritos usamos "event.preventDefault()" esto evita que se ejectute el evento del boton y por lo tanto no recargara la pagina
  event.preventDefault();

  //Traigo los inputs desde el html
  let nombre = document.getElementById("input1").value;
  let edad = document.getElementById("input2").value;
  let dni = document.getElementById("input3").value;
  let sexo = document.getElementById("input4").value;
  let peso = document.getElementById("input5").value;
  let altura = document.getElementById("input6").value;
  let nacimiento = document.getElementById("input7").value;

  // En este if pregunto si hay algun input vacio, si es que lo hay, informo al usuario mediante un aletr que llene todos los campos para continuar y por ultimo pongo un "return" para frenar el codigo y no dejar que siga, de lo contrario si estan todos los campos llenos no se ejecuta la condicional y continua con el codigo
  if (
    nombre == "" ||
    edad == "" ||
    dni == "" ||
    sexo == "" ||
    peso == "" ||
    altura == "" ||
    nacimiento == ""
  ) {
    alert("Para continuar debe llenar todos los campos");
    return;
  }

  //Creo el objeto persona
  let objetoNuevaPersona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    nacimiento
  );

  //Guardo la persona creada en la variable global
  nuevaPersona = objetoNuevaPersona;

  //Ejecuto el metodo mostrarDatos() de la persona creada
  nuevaPersona.mostrarDatos();

  //Traigo el div que contiene los botones "mostrar generacion" y "mostrar si es mayor de edad"
  const botonesPersona = document.getElementById("botonesPersona");

  //Elimino la clase "d-none" del contenedor de los botones para que los mismos aparezcan en pantalla una vez que se haya creado la persona correctamente
  botonesPersona.classList.remove("d-none");
};

// Funcion para ejecutar el metodo esMayordeEdad()
let funcionEsMayordeEdad = () => {
  nuevaPersona.esMayordeEdad();
};

// Duncion para ejectutar el metodo mostrarGeneracion()
let funcionMostrarGeneracion = () => {
  nuevaPersona.mostrarGeneracion();
};
