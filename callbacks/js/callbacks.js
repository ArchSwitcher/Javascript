const cities = ['London', 'New York', 'Madrid', 'Paris', 'Viena'];

// Inline Callback
cities.forEach(function(city){
    console.log(city);
    
})

function callback(city){
    console.log(city);
}

cities.forEach(callback);
