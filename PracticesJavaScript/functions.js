// Functions Declarations

function greet(name){
    console.log(`hola ${name}`);
}

// greet("Pablo");
// greet("Miguel");
// greet("Zapeta");

function greet1(Name = 'Visitante'){
    return `hola ${Name}`;
}
let greeting;

// greeting = greet() show undefined
greeting = greet1();

console.log(greeting);

// FUNCTION EXPRESSION

const add = function(a,b){
    return a +b;
}

console.log(add(1,2));


const musica = {
    reproducir: function(id){
        console.log(`Reproduciendo el id ${id}`);
    },
    pausar: function(){
        console.log('Pausando la cancion');
    }
}
// the functions methos also can saved or create out of object
musica.borrar = function(id){
    console.log(`Borrando la cancion ${id}`);
}

musica.reproducir(20);
musica.pausar();
musica.borrar(2);