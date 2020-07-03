const product1 = 'Pizza';
      price1 = 30,
      product2 = 'Hamburguesa'
      price2 = 40;
      
let html;

/* old way of create html
html = '<ul>' +
       '<li>Orden: ' + product1 + '</li>' +
       '<li>Price: ' + price1 + '</li>' + 
       '<li>Orden: ' + product2 + '</li>' + 
       '<li>Orden: ' + price2 + '</li>' +
       '<li>Total: ' + (price1 + price2) + '</li>' +
       '</ul>';
*/

// New way for create html named template literals
html =  `
    <ul>
    <li>Orden: ${product1} </li>
    <li>Precio: ${price1} </li>
    <li>Orden: ${product2} </li>
    <li>Precio: ${price2} </li>
    <li>Total: ${total(price1, price2)} </li>
    </ul>
    `;
function total(price1, price2){
    return price1 + price2;
}

document.getElementById('app').innerHTML = html
