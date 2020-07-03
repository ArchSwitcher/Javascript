const discountAply = new Promise(function(resolve, reject){
    const discount = false;
    if(discount){
        resolve('Aply');
    } else {
        reject('Any Aply');
    }
});

discountAply.then(function(message){
        console.log(message);
}).catch(function(error){
    console.log(error);
})