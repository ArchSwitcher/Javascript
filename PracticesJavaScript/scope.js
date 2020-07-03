// this variables can be rewrite in the scope
var a = 'a';
//this variables only access for each scope
let b = 'b';
const c = 'c';


function scope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    
    console.log('Funcion: ' + a,b,c);
}

scope();

if (true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    
    console.log('Bloque: ' + a,b,c );
}
console.log('GLOBALES: ' + a,b,c);