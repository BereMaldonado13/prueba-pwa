//Generamos una referencia a la etiqueta img que colocamos en index.html
let img = document.querySelector("img");
//accedemos a la imagen como esta en raiz solo colocamos el nombre
fetch("planeta.png")
 //Definicmos que el tipo de respuesta asociado a la petición es blob.
    .then((respuesta) => respuesta.blob())
    .then((imagen) => {
        /*la imagen recuperada que al ser blob es un conjunto de bytes
        debe convetirse en una url que pueda ser procesada en nuestra página
        para ello empleamos la función createObjectURL*/
        var imgPath = URL.createObjectURL(imagen);
        //Asociamos la url generada a nuestro etiqueta imagen a través de la propiedad src
        img.src = imgPath;
 })
 .catch((error) => {
    console.error("Error:", error);
 });