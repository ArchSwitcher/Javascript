// Promises

const waiting = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('se Ejecuto');
    }, 5000);
});

waiting.then(function(message){
    console.log(message);
})