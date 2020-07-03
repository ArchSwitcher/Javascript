// Variables
const userBudget = prompt('Cantidad de tu presupuesto Semanal?');
const form = document.getElementById('agregar-gasto');
let quantyBudget;

// Clases
// Clase de presupuesto
class Budget{
    constructor(budget){
        this.budget = Number(budget);
        this.remaining = Number(budget);
    }
    // Method for substrac budget
    budgetRemaining(quanti = 0){
        return this.remaining -= Number(quanti);
    }
}
// toodo lo relacionado con el HTML
class Interface{
    insertBudget(quanti){
        // const remaining = document.getElementById('restante');
        const spanRemaining = document.querySelector('span#total');
        // const budget = document.getElementById('total');
        const spanBudget = document.querySelector('span#restante');
        
        // insertar al HTML
        spanRemaining.innerHTML = `${quanti}`;
        spanBudget.innerHTML = `${quanti}`;
        
    }
    messagePrint(message, type){
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('text-center', 'alert')
        if(type === 'error'){
            messageDiv.classList.add('alert-danger');
        }else{
            messageDiv.classList.add('alert-success');
        }
        messageDiv.appendChild(document.createTextNode(message));
        // insertar en el DOM
        //.secundario const unica = document.querySelector('#gastos')
        document.querySelector('.primario').insertBefore(messageDiv, form)
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            // messageDiv.remove()
            form.reset();

        },3000);
    }
    addSpend(item, money){

        // const itemsAdd = document.querySelector('div.secundario');
        const itemsAdd = document.querySelector('#gastos ul');
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center' )
        li.innerHTML = `
            ${item}
            <span class="badge badge-primary badge-pill">$ ${money} </span>
        `;
        itemsAdd.appendChild(li);
        
        // const messageDiv = document.createElement('div');
        // messageDiv.classList.add('alert alert-secondary');
        // messageDiv.appendChild(document.createTextNode(item));
        // document.querySelector('#presupuesto').insertBefore("messageDiv", document.querySelector('div.alert-secondary'))

    }
    // Comprueba el presupuesto restante
    budgetRemaining(quanti){
        const remaining = document.getElementById('restante');
        // Actualizar el presupuesto restante
        const remainingBudget = quantyBudget.budgetRemaining(quanti);
        remaining.innerHTML = `${remainingBudget}`;
        this.checkBudget();
        
        // console.log(remainingBudget);
    }
    // cambia de color el presupuesto restante
    checkBudget(){
        const totalBudget = quantyBudget.budget;
        const remainingBudget = quantyBudget.remaining;
        const remaining = document.querySelector('.restante');

        // comprobar el 25% del gasto
        if((totalBudget/4) > remainingBudget){
            remaining.classList.remove('alert-success', 'alert-warning');
            remaining.classList.add('alert-danger');
        }else if((totalBudget/2) > remainingBudget){
            
            remaining.classList.remove('alert-success', 'alert-danger');
            remaining.classList.add('alert-warning');
        }
        else{
            remaining.classList.remove('alert-danger', 'alert-warning');
            remaining.classList.add('alert-success');
        }

    }
}
// Event Listeners
document.addEventListener("DOMContentLoaded", function(){
    

    if(userBudget === null || userBudget === ''){
        window.location.reload();
    }else{
        // Instanciar un presupuesto
        quantyBudget = new Budget(userBudget);
        // instanciar la clase de interface
        const ui = new Interface();

        ui.insertBudget(quantyBudget.budget);
    }
 


    
});
form.addEventListener('submit', function(e){
    e.preventDefault();
    const itemName = document.querySelector('#gasto').value;
    const moneySpend = document.querySelector('#cantidad').value;

    // instanciar la interface
    const ui = new Interface();
    // fieldQuantity.addEventListener('blur', fieldValidate);
    // fieldSpend.addEventListener('blur', fieldValidate);
    // console.log("Enviado");
    if(itemName === '' || moneySpend === ""){
        ui.messagePrint("Hubo un error", "error");
    }else{
        let number = Number(moneySpend);
        if(isNaN(number)){
            ui.messagePrint("La cantidad deve de ser numerica", "error");
        }else{
            ui.messagePrint("Todo Correcto", "correcto");
            // Insertar Valores debajo de .secundario
            ui.addSpend(itemName, moneySpend);
            ui.budgetRemaining(moneySpend);
        }
    }

});

function fieldValidate(){
    let validateLongth = this;
    console.log(typeof(validateLongth));

    if (validateLongth.length > 0){
        console.log("Valido");
    }else{
        console.log("No valido");
    }

}

