// ejemplo1
// const metodoPago ='bitcoin';

// switch(metodoPago){
//     case 'efectivo':
//         console.log(`El susuario pago con ${metodoPago}`);
//         break;
//     case 'cheque':
//         console.log(`El susuario pago con ${metodoPago}`);
//         break;
//     case 'tarjeta':
//         console.log(`El susuario pago con ${metodoPago}`);
//         break;
//     default:
//         console.log('Metodo de pago no soportado')
    
// }

// ejemplo2

let month;

switch(new Date().getMonth()){
    
    case 1:
        month = 'Enero';
        break;
    case 2:
        month = 'Febrero';
        break;
    case 3:
        month = 'Marzo ';
        break;
    case 4:
        month = 'Abril';
        break;
    case 5:
        month = 'Mayo';
        break;
    case 6:
        month = 'Junio';
        break;
    case 7:
        month = 'Julio';
        break;
    case 8:
        month = 'Agosto';
        break;
    case 9:
        month = 'Septiembre';
        break;
    case 10:
        month = 'Octubre';
        break;
    case 11:
        month = 'Noviembre';
        break;
    case 12:
        month = 'Diciembre';
        break;
    default:
        month = 'fecha no valida';
}

console.log(`Este mes es ${month}`);

