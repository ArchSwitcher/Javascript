const name = "Pablo";
let message = 'Y entonces dije buen \'Buen Curso!!\'';

message = 'JAVA' + 'SCRIPT';

message = 'Aprendiendo JavaScript, CSS, HTML, para ser un Full Stack';
// BUSCA CADENA DE CARACTERES
// console.log(message.indexOf('JavaScript')); 
// Muestra el texto hasta la lletra numero 11
    // console.log(message.substring(0,11));
    // console.log(message.slice(0,22));
//Divide el texto segun el string dentro de split (igual que en python)
    console.log(message.split(' '));
    console.log(message.split('JavaScript')); //Recorta javascript
    console.log(message.replace('CSS'));
//Busca y retorna un booleano
console.log(message.includes('PHP'));

let technology = "JavaScript" + ' '; 
console.log(technology.repeat(10) );