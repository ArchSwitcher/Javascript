// Cotizador Constructor
// Constructor para Seguro
function Insurance(brand, year, type){
    this.brand = brand;
    this.year = year;
    this.type = type;

}

Insurance.prototype.quote_insurnace = function(/* info */){
    // estoy reciviendo los valores de brand, Year y type
    // info me captura todos esos valores pero si quisiera usar uno solos
    // puedo usar. this.type o this.SelectedYear etc...
    /* 
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
//    console.log(this.brand);
//    console.log(this.year);
//    console.log(this.type);
   let quanty
   const base = 2000;

   switch (this.brand) {
       case '1':
           quanty = base * 1.15
           break;
       case '2':
           quanty = base * 1.05
           break;
       case '3':
           quanty = base * 1.35
           break;
   }
    //    leer el año
   const difference = new Date().getFullYear() -  this.year;
    //    Cada a;o de diferencia hay que reducir el 3% de la cantidad
    quanty -= ((difference * 3)* quanty)/100;
    /* 
    Si el seguro es basico se multiplica por 3% mas
    si el seguro es completo se multiplica por el 5% mas
    */
   if(this.type == 'basico'){
       quanty *= 1.30;
    }else{
        quanty *= 1.50;
    }
    return quanty; 
}
// Todo lo que se Muestra
function Interfaz(){
    // mensaje que se imprime en el HTML
    Interfaz.prototype.showMessage = function(message, type){
        const div = document.createElement('div');
        if(type === 'error'){
            div.classList.add('mensaje','error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML = `${message}`;
        form.insertBefore(div,document.querySelector('.form-group'));

        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        },3000);
    }
}
Interfaz.prototype.showResultt = function(insurance, quanty){
    const result = document.getElementById('resultado');
    let brand;
    switch (insurance.brand) {
        case '1':
            brand = 'Americano';
            break;
        case '2':
            brand = 'Asiatico';
            break;
        case '3':
            brand = 'Europeo';
            break;
    }

    const div = document.createElement('div');
    div.innerHTML = `
        <p class='header'>Tu Resumen:</p>
        Marca: ${brand}.
        Año: ${insurance.year}.
        Tipo: ${insurance.type}.
        Total: ${quanty}.
    `;
    const spinner = document.querySelector("#cargando img");
    spinner.style.display = 'block';
    setTimeout(function(){
        spinner.style.display = 'none';
        setTimeout(function(){
            result.appendChild(div);
        }, 100)
        
    }, 2000)
}
// Event Listeners
const form = document.getElementById('cotizar-seguro');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // leer la marca seleccionada del select
    const brand = document.getElementById('marca');
    const selectedBrand = brand.options[brand.selectedIndex].value;
    
    // leer el año seleccionado del select
    const year = document.getElementById('anio');
    const selectedYear = year.options[year.selectedIndex].value;

    // lee el valor del radio button
    const type = document.querySelector('input[name="tipo"]:checked').value;

    // crear instancia de interfaz
    const interfaz = new Interfaz();
    // comprobar que los campos no esten vacios
    if(selectedBrand === '' || selectedYear === '' || type === ''){
        interfaz.showMessage('Faltan datos revisa el formulario y prueba de nuevo','error');
    }else{
        const results = document.querySelector('#resultado div');
        if (results != null){
            results.remove()
        }
        // console.log(selectedYear);
        const insurance = new Insurance(selectedBrand, selectedYear, type);
        // Cotizar Seguro
        const quanty = insurance.quote_insurnace(insurance);
        interfaz.showResultt(insurance,quanty);
        interfaz.showMessage('Cotizando.....', 'correcto');
    }
    // console.log(selectedBrand);
    // console.log(selectedYear);
});

// Genera opciones de select año
const max = new Date().getFullYear(),
    min = max - 20;
    //   console.log(max);
    //   console.log(min);

const yearSelect = document.getElementById('anio');

for(let i = max; i >= min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    yearSelect.appendChild(option);
}

