document.body.addEventListener('click', deleteElement);

function deleteElement(e){
    e.preventDefault(); //delegation
    // console.log('CLICK');
    // console.log(e.target.classList);
    
    
    // remove element 
    if(e.target.classList.contains('borrar-curso')){
       console.log(e.target.parentElement.parentElement.remove());
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('Curso Agregado');
    }
}


