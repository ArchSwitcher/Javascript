       // Crear enlace

       const link = document.createElement('a');

       // agregamos la clase

link.className = 'enlace';
   // añadir id
link.id = 'nuevo-id'
   //atrubito href
link.setAttribute('href','#');
   //añadir texto
link.appendChild(document.createTextNode('Nuevo enlace'));
       // or
// link.textContent = 'Nuevoenlace'

//agregando al html
document.querySelector('#secundaria').appendChild(link);

console.log(link);