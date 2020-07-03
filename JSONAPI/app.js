const loadPost = document.querySelector('#cargar');

loadPost.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function(){
        if(this.status === 200){
            const random = JSON.parse(this.responseText);
            let htmlTemplate = '';

            random.forEach(function(objects) {
                htmlTemplate += `
                    <ul>
                        <li>userId: ${objects.userId} </li>
                        <li>id: ${objects.id} </li>
                        <li>title: ${objects.title} </li>
                        <li>body : ${objects.body } </li>
                    </ul>
                `;
            });
            document.getElementById('listado').innerHTML = htmlTemplate
            
        }
    }
    xhr.send();
});




