const cities = ['London', 'New York', 'Madrid', 'Paris'];
const orders = new Set([123,231,131,102]);
const data = new Map();
data.set('nombre1', 'Pablo'); //Key, Value
data.set('profession', 'Web Developer');

// console.log(cities);
// console.log(orders);
// console.log(data);

// for(let entry of cities.entries()){
//     console.log(entry);
// }

// for(let entries of orders.entries()){
//     console.log(entries);
// }
// for(let entries of data.entries()){
//     console.log(entries);
// }
            // Values iterados
// for(let entries of cities.values()){
//     console.log(entries);
// }

// for(let entries of data.values()){
//     console.log(entries);
// }

            // iterator keys

// for(let entries of cities.keys()){
//     console.log(entries);
// }
// for(let entries of data.keys()){
//     console.log(entries);
// }

            // Iterators for strings
// const message = "Learn JavaScript"
// for(let letter of message){
//     console.log(letter);
// }

            // Iterator for html tags 
const links = document.getElementsByTagName('a');
for(let link of links){
    console.log(link.href);
}