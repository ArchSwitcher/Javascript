        // variables
const tweetsList = document.getElementById('lista-tweets');
let element;

        // event listeners
        
eventListeners();

function eventListeners(){
    // Cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit', addTweet);
    
    // borrar tweets
    tweetsList.addEventListener('click', deleteTweet);

    // Contenido Cargado
    document.addEventListener('DOMContentLoaded', ReadyLocalStorage);
}

        // functions
// agregar un nuevo tweet al formulario
function addTweet(e){
    e.preventDefault();
    // console.log('Formulario Enviado');
    // leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    // console.log(tweet);
    
    // Crear boton de eliminar
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'borrar-tweet'
    deleteButton.innerText = 'X';

    
    // Crear elemento para añadirlo al contenido de la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el boton borrar al tweet
    li.appendChild(deleteButton)
    // añade el tweet como una lista de elementos
    tweetsList.appendChild(li);

    // añadir a local storage
    addTweetLocalStorage(tweet);

}
// Eliminiar Tweet
function deleteTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
     e.target.parentElement.remove();   
    //  console.log(e.target.parentElement.textContent);
     deleteTweetLocalStorage(e.target.parentElement.textContent);        
    }
}

// Mostrar datos de localStorage en la lista
function ReadyLocalStorage(){
    let tweets;

    tweets = getTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        const deleteButton = document.createElement('a');
        deleteButton.classList = 'borrar-tweet'
        deleteButton.innerText = 'X';
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(deleteButton)
        tweetsList.appendChild(li);
        
    });
    
}

// agrega tweet a local storage
function addTweetLocalStorage(tweet){
    let tweets;
    tweets = getTweetsLocalStorage();
    // añadir el nuevo tweet
    tweets.push(tweet);
    // convertir de string a arreglo para local storage
    // LOCAL STORAGE SOLO GUARDA STRINGS
    localStorage.setItem('tweets', JSON.stringify(tweets))
}


// Comprobar que haya elementos en local Storage, retorna un arreglo
function getTweetsLocalStorage(){
    let tweets;
    // revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets
}


function deleteTweetLocalStorage(tweet){
    let tweets, deleteTweet;
    // Elimina la X del tweet
    deleteTweet = tweet.substring(0, tweet.length - 1);

    tweets = getTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if(deleteTweet === tweet){
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
    // console.log(tweets);
}
