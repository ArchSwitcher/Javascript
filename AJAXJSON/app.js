const button1 = document.getElementById('boton1');

button1.addEventListener('click', function(){
    
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function(){
        if(this.status ===200){
            const person = JSON.parse(this.responseText);
            const htmlTemplate = `
            <ul> 
                <li>ID: ${person.id}</li>
                <li>Nombre: ${person.nombre}</li>
                <li>Empresa: ${person.empresa}</li>
                <li>Trabajo: ${person.trabajo}</li>
            </ul>
            `;
            document.getElementById('empleado').innerHTML = htmlTemplate;

        }
    }
    xhr.send();
});

const button2 = document.getElementById('boton2');

button2.addEventListener('click', function(){
const xhr =  new XMLHttpRequest();
xhr.open('GET', 'empleados.json', true);

xhr.onload = function(){
    if (this.status === 200){
        const people = JSON.parse(this.responseText);
        let htmlTemplate = '';

        people.forEach(function(person) {
            htmlTemplate += `
            <ul> 
                <li> ID: ${person.id} </li>
                <li> nombre: ${person.nombre} </li>
                <li> empresa: ${person.empresa} </li>
                <li> trabajo: ${person.trabajo} </li>
            </ul>    
            `;
        })
        document.getElementById('empleados').innerHTML = htmlTemplate;
    }
        
    

}
   xhr.send();
});