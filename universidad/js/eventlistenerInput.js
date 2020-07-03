                    // Variables
const search = document.querySelector('#buscador');

search.addEventListener('keydown', getEvent); //get keyword press keys
search.addEventListener('keyup', getEvent);  //get event when the key is pull
search.addEventListener('keypress', getEvent);  //get event when any key is push
search.addEventListener('focus', getEvent);  //get event when click is detected
search.addEventListener('blur', getEvent);  //used for validation when someone entry and leave and
// click in whenever of page blur event is true
search.addEventListener('cut', getEvent);  //get event when text is cut ctrl+x
search.addEventListener('copy', getEvent);  //get event when text is copy ctrl+c
search.addEventListener('paste', getEvent); //get event when text is paste
search.addEventListener('input', getEvent); //get event when anything event (paste,copy keyup, keydown..)
search.addEventListener('change', getEvent); //read more

search.style.color = 'black '


function getEvent(e){
    // document.querySelector('#encabezado').innerText = search.value
    console.log(`Evento: ${e.type}`);
}

