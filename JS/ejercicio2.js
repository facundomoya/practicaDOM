class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,nacimiento){
        this.nombre=nombre
        this.edad=edad
        this.dni=dni
        this.sexo=sexo
        this.peso=peso
        this.altura=altura
        this.nacimiento=nacimiento
    }
}


function mostrarDatos(){
    let prop1 = document.getElementById("input1")
    this.nombre = prop1.value
    console.log("Nombre: "+prop1.value)
    let prop2 = document.getElementById("input2")
    this.edad = prop2.value
    console.log("Edad: "+prop2.value)
    let prop3 = document.getElementById("input3")
    this.dni=prop3.value
    console.log("DNI: "+prop3.value)
    let prop4 = document.getElementById("input4")
    this.sexo = prop4.value
    console.log("Sexo: "+prop4.value)
    let prop5 = document.getElementById("input5")
    this.peso = prop5.value
    console.log("Peso: "+prop5.value)
    let prop6 = document.getElementById("input6")
    this.altura = prop6.value
    console.log("Altura: "+prop6.value)
    let prop7 = document.getElementById("input7")
    this.nacimiento =prop7.value
    console.log("Año de nacimiento: "+prop7.value)

}

function crearObjeto(){
  let person = new Persona(nombre,edad,dni,sexo,peso,altura,nacimiento)
  console.log(person)
}

function esMayordeEdad(){
    if(this.edad >= 18){
        alert("La persona es mayor de edad")
    }else{
        alert("La persona no es mayor de edad")
    }
}

function mostrarGeneracion() {
    if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
        alert("La generación a la que pertenece es la GENERACION Z y su rasgo caracteristico es la irreverencia");
      } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
        alert(
          "La generación a la que pertenece es la GENERACION Y (millennials) y su rasgo caracteristico es la frustación"
        );
      } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
        alert("La generación a la que pertenece es la GENERACION X y su rasgo caracteristico es la obsesión por el éxito");
      } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
        alert("La generación a la que pertenece es la Baby Boom y su rasgo caracteristico es la ambición");
      } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
        alert(
          "La generación a la que pertenece es la Silent Generation(los niños de la posguerra y su rasgo caracteristico es la austeridad"
        );
      }
}