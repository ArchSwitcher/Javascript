try{
    // no existe la funcion
    algo();
} catch (error){
    console.log(error);
} finally{
    console.log("executa aunque sea try o catch");
}

get_clients()

function get_clients(){
    console.log('Download.....');
    
    setTimeout(function(){
        console.log('Complete');
    }, 3000);
}