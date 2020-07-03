
const form = document.querySelector('#formulario').addEventListener('submit', Fresults);
const results = document.querySelector('#results');
// let li = results.children[1].children;
let li = document.createElement('li')

class Interface{
    showMessage(message, status){
        results.className = 'alert'
        
        if (status === 'error'){
            results.classList.add('alert-danger')
            li.innerHTML = `
            <h3> Text Input Vacio</h3>
            `;
            setTimeout(function(){
                results.children[1].children[0].remove();
            },2000) 
        }else{
            results.classList.remove('alert-danger')
            results.classList.add('alert-success')
            li.innerHTML = `
            <h3> ${message} </h3>
            `;
            setTimeout(function(){
                results.children[1].children[0].remove();
                document.getElementById('formulario').reset();
            },4000)
        }
        
        results.children[1].appendChild(li)
        
    }
}
function Fresults(e){
    e.preventDefault();
    let url = '';
    url += 'api.openweathermap.org/data/2.5/weather?';
    

    let city = document.getElementById('city').value;
    const interface = new Interface();

    if(city == ''){
        interface.showMessage("Escriba una ciudad", 'error' );
    }else{
        url += `q=${city}&appid=9e6c718c036f7599a8bf6dc65a065a8e`;
        // console.log(url);
    }
    //---------------- Conectar con ajax ----------------
    // Iniciar XMLHTTPRequest
    const xhr = new XMLHttpRequest();
    // Abrimos la conexion
    xhr.open('GET', url, true);
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    xhr.onload = function(){
        if(this.status === 200){
            // const weatherCity = JSON.parse(this.responseText);
            console.log(this.responseText);
            // interface.showMessage(weatherCity, 'success');
        }
    }
    xhr.send();
}



