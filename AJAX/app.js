document.getElementById('cargar').addEventListener('click', dataLoad);


function dataLoad(){
    // crear el objeto xmlhttpRequest
    const xhr = new XMLHttpRequest();

    // abrir una coneccion
    xhr.open('GET', 'datos.txt', true);

    // una vez que carga
    // xhr.onload = function() {
        // 200: correcto | 403: prohibido
        // if(this.status === 200){
        //     console.log(this.responseText);
        //     document.getElementById('listado').innerHTML = `<h1> ${this.responseText}</h1>`;
        // }
        xhr.onreadystatechange = function(){
            console.log(`estado ${this.readyState}`);
            
            if(this.readyState === 4 && this.status === 200){
                // console.log(this.responseText);
                console.log(object);
            }
        }
        // ready status
        /* 
        0 - No inicializado
        1 - Coneccion establecida
        2 - Recibida
        3 - procesado
        4 - Respuesta lista

         */
    // }
    // enviar el request
    xhr.send();

}