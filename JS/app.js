function cambiarTitulo() {
  console.log("Desde la funcion cambiar titulo");
  //opcion 1 para traer un elemento del HTML
  // let tituloH1=document.querySelector("#titulo")
  //opcion 2 para obtener un elemento de HTML
  let tituloH1 = document.getElementById("titulo");
  console.log(tituloH1.innerHTML);
  tituloH1.innerHTML = "Un nuevo titulo";
  tituloH1.className = "display-2 text-primary";
}

function verMas() {
  console.log("Prueba desde ver más");
  // buscar el boton (CADA VEZ QUE BUSCAMOS SE CREA UNA VARIABLE NUEVA)
  let btnVermas = document.getElementById("btnVerMas");
  //crear y agregar un elemento al DOM
  //paso 1 - buscar el elemento padre
  let articulos = document.getElementsByTagName("article");
  console.log(articulos[1]);

  if (btnVermas.innerHTML == "Ver más...") {
    btnVermas.innerHTML = "Ocultar";
    btnVermas.className = "btn btn-outline-danger";

    //paso 2 - crear el elemento hijo
    /* let parrafo = document.createElement("p"); //<p></p> crea una etiqueta p como si fuera un objeto
  console.log(parrafo);
  parrafo.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis ad a nemo possimus saepe officiis. Corporis odit esse, vitae, tempora temporibus, officiis magni facilis repellat aliquam nam itaque consequuntur numquam. Velit adipisci illo debitis qui, sequi hic nobis beatae, placeat optio minima odio quas vel quibusdam. Necessitatibus, amet nemo. Error quasi placeat quod molestias ex sint, facilis alias facere numquam nesciunt id ducimus vitae totam dignissimos nostrum assumenda fugit? Ratione itaque dolore ex eveniet quis hic harum totam. Doloremque, praesentium. Nulla dolorum ea autem officia magni repudiandae enim perferendis, odit doloribus alias, delectus voluptas, labore ut voluptate itaque eveniet.";
  parrafo.className = "lead"

  //paso 3 - agregar el nuevo elemento hijo a su respectivo padre
  articulos[1].appendChild(parrafo) */

    //segunda FORMA PARA CREAR ELEMENTOS HTML desde JS
    
    let parrafo = `<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus atque ad sit dignissimos, iste quia laboriosam neque hic eum.</p>`;
    
    //siempre que tengamos codigo de HTML hay que ponerlo entre comillas para que sea valido, JS no entiende HTML
    articulos[1].innerHTML += parrafo 
    // articulos[1].innerHTML = articuos[!].innerHTML + parrafo
  
  } else {
    console.log("ahora cambiar el texto del boton por Ver más...");
    //volver el boton a su estado original ver mas...
    btnVermas.innerHTML = "Ver más...";
    btnVermas.className = "btn btn-outline-success";
    //eliminar el parrafo

    console.log(articulos[1].hasChildNodes());
    console.log(articulos[1].children.length);
    console.log(articulos[1].children);
    if (articulos[1].hasChildNodes() && articulos[1].children.length == 3) {
      //eliminar efectivamente el parrafo
      articulos[1].removeChild(articulos[1].children[2]);
    }
  }
}
