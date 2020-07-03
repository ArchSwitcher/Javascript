// Listado de paises
const countries = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];
// New country add after 2 secons
function newCountry(country, callback){
    setTimeout(function(){
        countries.push(country);
        callback();
    }, 2000);
}

// countryes are show after 1 second
function showContries(){
    setTimeout(function(){
        let html = '';
        countries.forEach(function(country){
            html += `<li>${country}</li>`;
        });
        document.getElementById('carrito').innerHTML = html;
    }, 1000);
}

newCountry('Nueva Zelanda', showContries);
newCountry('Canada', showContries);
showContries();
