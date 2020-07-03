const card = document.querySelector('.card');
const infoCourse = document.querySelector('.info-card');
const addShopingcar = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(){
    console.log('Click en Card');

});
                // Course
infoCourse.addEventListener('click', function(){
    console.log('Click en info curso');
    
});
                
                // Add Shopping car
addShopingcar.addEventListener('click', function(){
    console.log('Click en agregar al crrito');
})

// la respuesta es:
// Click en agregar al crrito
// Click en info curso
// Click en Card
// esto es porque entra segun la prioridad de los divs esto es conocido como eventbubbling


card.addEventListener('click', function(e){
    console.log('Click en Card');
    e.stopPropagation();

});
                // Course
infoCourse.addEventListener('click', function(e){
    console.log('Click en info curso');
    e.stopPropagation();
});
                
                // Add Shopping car
addShopingcar.addEventListener('click', function(e){
    console.log('Click en agregar al crrito');
    e.stopPropagation();
});

// la respuesta es:
// Click en Card
// Click en info curso
// Click en agregar al crrito
