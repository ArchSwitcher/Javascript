// variables
let enterEventCode =0;
const header = document.querySelector('#encabezado');
const links = document.querySelectorAll('.enlace');
                    // get event 
const button = document.querySelector('#vaciar-carrito');
            // get event one 'click' 
// button.addEventListener('click', getEvent);
             // get event double 'dblclick' 
// button.addEventListener('dblclick', getEvent);
             // get event mouseenter count 1 
// button.addEventListener('mouseenter', getEvent);
             // get event when mouse enter and then leave count 1 
// button.addEventListener('mouseleave', getEvent);
// button.addEventListener('mouseover', getEvent); // mouse over element
// button.addEventListener('mouseout', getEvent); // get event when mouse enter and count then leave count
// button.addEventListener('mousedown', getEvent); // get event when rigth-click is pushed
// button.addEventListener('mouseoff', getEvent); // get event when click is finished
// button.addEventListener('mouseoff', getEvent); // get event when click is finished

header.addEventListener('mousemove', getEvent);

function getEvent(e){
    console.log(`EVENT: ${e.type}`);
    enterEventCode++;

}


