document.getElementById('apiBTN').addEventListener('click', apiLoad);

function apiLoad(){
    fetch('https://picsum.photos/list')
        .then(function(firstData){
            return firstData.json();
            // console.log(firstData.json());
        })
        .then(function(data){
            html = '';
            data.slice(10).forEach(function(data1){
                html += `
                <li>
                <a href=${data1.post_url}> Ver imagen</a>
                ${data1.author} 
                </li>
                `
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log("eroores");
        });
}