/*creamos un objeto con la estructura de JSON
que contiene los datos a enviar */
let usuario = {
    nombre:'Juan',
    edad:22,
    carrera:'TI'
    };

//accedemos a la ruta a donde enviaremos los datos
fetch( 'https://reqres.in/api/', {
 method:'POST', //indicamos que el proceso será envio PUT
 body: JSON.stringify(usuario), //Los datos a enviar
 //se especifica el tipo de medio a enviar
 headers: {'Content-Type': 'application/json'}
})
//Si el envió es correcto recuperamos el objeto para mostrarlo en pantalla
 .then(respuesta => respuesta.json())
 //obtenemos almacenamos la respuesta e imprimimos en consola
 .then(datos => console.log(datos))
 //Si ocurre algún error lo atrapamos e imprimimos
 .catch(error => {
 console.log('ERROR ENCONTRADO');
 console.log('Error:', error);
 });