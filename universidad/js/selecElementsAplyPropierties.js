let headerPablo;

// element = document.getElementById('header').className;
// element = element.id;

// headerPablo = document.getElementById('encabezado').className;

// headerPablo = document.getElementById('encabezado').textContent;
// headerPablo = document.getElementById('encabezado').innerText;

headerPablo = document.getElementById('encabezado');
headerPablo.style.backgroundColor = '#333';
headerPablo.style.color = '#FFF';
headerPablo.style.padding = '20px';

headerPablo.textContent = 'Pablo Developer';
                // or
headerPablo.innerText = 'Pablo Developer';
console.log(headerPablo);