//controlando etiquetas con el dom

//almacenar en memoria(crear una variable)
//la etiqueta que quiero controlar
let etiquetaImagen=document.getElementById("fotografia")

//controlando nuestras etiquetas

// controlar es cambiar la fuente (src) de una etiqueta
etiquetaImagen.src="./img/dragonball2.png"

//controlar es cambiar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//controlar es agregar estilos
etiquetaTitulo.classList.add("fuente","alineado")

//controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove("text-danger")

//controlar es detectar eventos
let etiquetaBoton = document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})

