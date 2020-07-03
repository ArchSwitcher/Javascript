document.getElementById('jsonBtn').addEventListener('click', jsonLoad);

function jsonLoad(){
    fetch('empleados.json')
        .then(function(result){
            return result.json();
        })
        .then(function(employies){
            let html = '';
            employies.forEach(function(employed){
                html += `
                    <li>${employed.nombre} ${employed.puesto}</li>
                `
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        });
}