//Lectura en consola
//Procesamos la petición al archivo texto.html
fetch("texto.html")
//atrapamos la respuesta indicando que es de tipo text
.then(respuesta=>respuesta.text())
//procesamos el resultado para mostrarlo en consola
.then(html => console.log(html))
.catch(error=>{
 console.log("ERROR");
 console.log(error);
});