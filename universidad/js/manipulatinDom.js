// let element;

// element = document;
// element = document.all;
// element = document.all[10];
// element = document.head;
// element = document.body;
// element = document.domain;
// element = document.URL;
// element = document.forms;
// element = document.forms[0].id;
// element = document.forms[0].className;
// element = document.forms[0].classList;
// // if existiera mas de 1 clase se podria saber
// // por la lista en classList[0]
// element = document.forms[0].classList[0];

// // devuelve las imagenes
// element = document.images;
// element = document.images[2];
// // get relative image url
// element = document.images[2].getAttribute('src');
// element = document.scripts;

// element = document.scripts;
// element = document.images;

// // Exercices

let images = document.images;
// convert an array of images
let imagesArr = Array.from(images);


imagesArr.forEach(function(image){
    console.log(image);
});
// console.log(imagesArr);


