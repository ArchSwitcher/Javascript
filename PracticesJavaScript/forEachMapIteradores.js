// const to_do_list = ['Tarea', 'Comer', 'Proyecto', 'Aprender Javascript'];

// // ForEach

// to_do_list.forEach(function(to_do, index){
//  console.log(`${index} : ${to_do}`);
// });

// console.log(to_do_list);

            // // Map para recorrer un arreglo de objectos

// const shop_car = [
//     {id: 1, product: 'Book'},
//     {id: 2, product: 'Shirt'},
//     {id: 3, product: 'Disc'},
//     {id: 4, product: 'Guitar'},
// ];

// const productName = shop_car.map(function(shop_car){
//     return shop_car.product;
// })

// console.log(productName);



            // Iteradores

const car = {
    model: 'Camaro',
    motor: 6.1,
    year: 1969,
    brand: 'Chevrolet'

}

for( let c in car){
    console.log(`${c}: ${car[c]}`);
}