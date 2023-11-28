function metodo1(){
    var promesa=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve(" Método 1 correcto");
    },2000)
    });
    return promesa;
    }
    function metodo2(){
    var promesa=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve("Método 2 correcto");
    },800)
    });
    return promesa;
    }