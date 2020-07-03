// Variables
const email = document.getElementById('email');
const message = document.getElementById('mensaje');
const subject = document.getElementById('asunto');
const btnSend = document.getElementById('enviar');
const loader = document.getElementById('loaders');
const sendForm = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');

// Event Listener
(()=>{
    // inicio de la aplicacion y deshabilitar enviar
    document.addEventListener('DOMContentLoaded', inicioApp);

    // events para campos del formulario
    email.addEventListener('blur', fieldValidate);
    message.addEventListener('blur', fieldValidate);
    subject.addEventListener('blur', fieldValidate);
    btnSend.addEventListener('click', send_email);
    btnReset.addEventListener('click', formReset)
})();
// Funciones

function inicioApp(){
    btnSend.disabled =  true;
}
function fieldValidate(){
    
    // se valida la longitud del texto y que no este vacia en todos los campos
    validateLongth(this);
    // this.type; returns value of id 

    if (this.type === 'email'){
        emailValidate(this);
    }
    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && subject.value !== "" && message.value !== ""){
        if(errores.length === 0){
            btnSend.disabled = false;
        }
    }

}

function send_email(e){
    const spinnerGif =  document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    
    // gif envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    
    setTimeout(function (){
        spinnerGif.style.display = 'none';
        loader.appendChild(enviado);
        sendForm.reset();
        setTimeout(function(){
            enviado.remove();
            
        },5000)
    }, 3000)
    
    e.preventDefault();


}
// limpiar todo el formulario con el boton
function formReset(e){
    e.preventDefault();
    sendForm.reset();
}

function validateLongth(field){

    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');

    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
        btnSend.disabled =  true;
    }
}

function emailValidate(field){
    const message = field.value;
    if(message.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        btnSend.disabled =  true;
        field.style.borderBottomColor = 'red';
        console.log('No @'); 
        field.classList.add('error');
    }
}

