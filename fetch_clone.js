//Recuperamos unicamente un usuario con id 1
fetch( 'https://reqres.in/api/users/1' )
//Si el acceso es correcto recuperamos la
respuesta
 .then(respuesta =>{
 //Primera lectura
 respuesta.clone().json()
 .then(usuario=> console.log(usuario));
//Segunda lectura
 respuesta.clone().json()
 .then(usuario=> console.log(usuario));
 //Tercera lectura
 respuesta.json()
 .then(usuario=> console.log(usuario));
});