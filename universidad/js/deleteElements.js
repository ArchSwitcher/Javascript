// const links = document.querySelectorAll('.enlace');

// const nav = document.querySelector('#principal');


// // REMOVE ELEMENT
// links[0].remove();
//     // or
// nav.removeChild(links[2]);
// console.log(links);

        // REMOVE CLASS

const firstLink = document.querySelector('.enlace');
let element;

//             // get css class
// element = firstLink.className;
// element = firstLink.classList.add('Nueva-clase')
// element = firstLink.classList;
// // console.log(element);


// read atributes
element = firstLink.getAttribute('href');
firstLink.setAttribute('href', 'http://facebook.com');
firstLink.setAttribute('data-id',20);
// comprueba que exista el atributo
firstLink.hasAttribute('data-id');
// removiendo atributo
firstLink.removeAttribute('data-id');
element = firstLink
console.log(element);
