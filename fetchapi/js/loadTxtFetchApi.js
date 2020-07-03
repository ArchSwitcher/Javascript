document.getElementById('txtBtn').addEventListener('click', txtLoad);


function txtLoad(){
    fetch('data.txt')
        .then(function(result){
            return result.text();
            // the first then catch data and .text depending of proto methods
            // the second then return the data in plain text
        })
        .then(function(data){
            console.log(data);
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        });
}

















