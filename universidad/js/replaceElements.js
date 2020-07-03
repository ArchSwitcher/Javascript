// Remplazar elementos

const newHead = document.createElement('h2');

newHead.id = 'encabezado';

newHead.appendChild(document.createTextNode('Pablo Miguel Zapeta Lopez'))
// Elemento before (sera remplazado)

const before = document.querySelector('#encabezado');
console.log(before.parentElement);
const elementFather = document.querySelector('#lista-cursos')

elementFather.replaceChild(newHead, before);

console.log(before.parentElement);


