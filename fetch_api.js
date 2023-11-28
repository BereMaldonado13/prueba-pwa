//accedemos a la ruta que nos retornara los datos JSON
fetch( 'https://reqres.in/api/users' )
//Si el acceso es correcto recuperamos la respuesta
 .then(respuesta => respuesta.json())
 //obtenemos almacenamos la respuesta e imprimimos en consola
 .then(datos => {
 //almacenamos en correo la dirección de email
 correo= datos.data[0].email;
 //imprimimos en consola
 console.log(correo);
 })
 //Si ocurre algun error lo atrapamos e imprimimos
 .catch(error => {
 console.error('Error:', error);
 });