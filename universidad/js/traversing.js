// Trata sobre navegar dentro 


let nav = document.querySelector('#principal');

// console.log(navegacion.nodeName);

// console.log(navegacion.children[4].nodeName); nodeName / nodeType
        // nodeType
        // 1 Elementos
        // 2 Atributos
        // 3 textNodes
        // 4 Comentarios
        // 5 documentos
        // 6 doctype
        // 7 ...


        // --------------------------------------
            // children returns child selector= #principal

// console.log(nav.children);
// console.log(nav.children[0].textContent = 'Nuevo enlace');

// const bar = document.querySelector('.barra');

// console.log(bar.children[0].children[0].children[0].children[0].children[0]);


// // ---------------------------------------------------------------------------------
// const courses = document.querySelectorAll('.card');

// console.log(courses[0].lastChild);
// console.log(courses[0].lastElementChild);
// console.log(courses[0].firstElementChild);
// console.log(courses[0].childElementCount);



///---------------------------------
// subiendo del hijo al padre
// const links = document.querySelectorAll('.enlace');

// console.log(links);
// console.log(links[4].parentElement);


// const cursos = document.querySelectorAll('.card');

// console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde traversings');


// const enlaces = document.querySelectorAll('.enlace');

// console.log(enlaces[4]);
// console.log(enlaces[4].previousSibling);
// console.log(enlaces[4].previousElementSibling.previousElementSibling);
// console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]);

 