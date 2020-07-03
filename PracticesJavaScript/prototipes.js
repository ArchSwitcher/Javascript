function Client(name, money){
    this.name = name,
    this.money = money;
}
// crear un prototipo
Client.prototype.typeClient = function(age){
    let type;
    if(this.money > 1000){
        type = 'Gold';
    }else if(this.money > 500){
        type = 'Platinum';
    }else{
        type = 'Normal'
    }
    return type;
}
// Prototipo que imprime saldo y nombre
Client.prototype.NameClientMoney = function(){
    return `Nombre: ${this.name}, tu saldo es de ${this.money}, tipo de cliente ${this.typeClient()}`
}
// Retirar Saldo
Client.prototype.gotMoney= function(retiro){
    return this.money -= retiro;
}

// HEREDAR atributos
function Company(name, money, phone, type){
    // Heredando los atributos esto es util si la
    // funcion Client tuviera demasiados atributos 
    Client.call(this, name, money);
    this.phone = phone,
    this.type = type
}
// //////////////////////////////////////////////
const client1 = new Client('Pablo', 100);
const client2 = new Client('Karen', 600);
const client3 = new Client('Miguel', 1200);

client2.gotMoney(300);

console.log(client1.NameClientMoney());
console.log(client2.NameClientMoney());
console.log(client3.NameClientMoney());
                // HEREDANDO PROTOTIPES the Client
Company.prototype = Object.create(Client.prototype);
const company1 = new Company('Udemy', 10000000000, 12423346456, 'Education');
console.log(company1.NameClientMoney());
