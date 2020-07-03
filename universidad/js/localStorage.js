// agregar a Local Storage
localStorage.setItem('nombre', 'pablo');

// session in that moment of browser
// add value to session storage
sessionStorage.setItem('nombre', 'Pablo');
// delete of localStorage
localStorage.removeItem('nombre');

localStorage.clear();


const nombre = localStorage.getItem('nombre');
console.log(nombre);
