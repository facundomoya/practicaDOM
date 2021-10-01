let identificador;
let segundos = 0
let minutos = 0
let horas = 0

function Iniciar(){
   clearInterval(identificador)
   let h = document.querySelector("#horas")
   let m = document.querySelector("#minutos")
   let s = document.querySelector("#segundos")
    identificador=window.setInterval(function Carga(){
       if(segundos == 60){
           segundos=0
           minutos++;
           if(minutos<10){
            minutos="0"+minutos
        }
           m.innerHTML=minutos+":"
           if(minutos >59){
               minutos=0
               horas++
               if(horas<10){
                horas="0"+horas
            }
               h.innerHTML=horas+":"
           }
       }
       if(segundos<10){
        segundos="0"+segundos
    }
       s.innerHTML=segundos
       segundos++
   },1000)

   let button1 = document.querySelector("#boton1")

   if(button1.innerHTML=="Reanudar"){
    button1.innerHTML="Iniciar"
    button1.className="btn btn-primary botones"
}
}

function Pausar(){
    clearInterval(identificador)
    let button1 = document.querySelector("#boton1")
    if(button1.innerHTML=="Iniciar"){
        button1.innerHTML="Reanudar"
        button1.className="btn btn-warning botones"
    }
}

function Reset(){
   clearInterval(identificador)
   let h = document.querySelector("#horas")
   let m = document.querySelector("#minutos")
   let s = document.querySelector("#segundos")
   h.innerHTML="00:"
   m.innerHTML="00:"
   s.innerHTML="00"
   segundos = 0
   minutos = 0
   horas = 0
   let button1 = document.querySelector("#boton1")
   if(button1.innerHTML=="Reanudar"){
    button1.innerHTML="Iniciar"
    button1.className="btn btn-primary botones"
    }
}
