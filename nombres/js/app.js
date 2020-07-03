// Variables
var data = null;
var xhr = new XMLHttpRequest();
document.querySelector('#generar-nombre').addEventListener('submit', nameLoad);
// xhr.open('GET','https://love-calculator.p.rapidapi.com/getPercentage?', true);
// xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');
// xhr.setRequestHeader("x-rapidapi-key", "0f5150f9fcmsh157d03f4b543116p154ff4jsn817a76d287f2");

function nameLoad(e){
    e.preventDefault();
    // leer las varibales
    const result = document.getElementById('resultado');
    const span = document.createElement('h1');
    span.innerHTML = `
    <p class="text-default"> hola </p>
    `;
    result.appendChild(span);
}


// xhr.send(data);


// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://love-calculator.p.rapidapi.com/getPercentage?fname=pablo&sname=Maty");
// xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "0f5150f9fcmsh157d03f4b543116p154ff4jsn817a76d287f2");

// xhr.send(data);