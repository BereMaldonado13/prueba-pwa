function sumarAsincrona(numero) {
    /*el resultado de la ejecucion de la promesa (reject o resolve) se almacena en la variable promesa*/
    var promesa=new Promise(function(resolve,reject) {
        //imprime el valor que recibe la funcion
        console.log(numero);
        //si el numero llega a cinco se ejecuta el proceso de rechazo de la promesa
        if(numero>=5) {
            reject('el numero es mayor o igual a 5');
        }
        //si el numero es valido se ejecuta el proceso asincronomo encargado de incrementar el numero
       setTimeout(function(){
            resolve(numero+1);
       },2000)
    });
    //la funcion retorna el objeto promesa
    return promesa;
}