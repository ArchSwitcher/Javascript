// variables
const shoping_car = document.getElementById('carrito');
const course = document.getElementById('lista-cursos');
const course_list = document.querySelector("#lista-carrito tbody");
const emptyShoppingCarBtn = document.getElementById('vaciar-carrito');
const header = document.getElementById('encabezado');

// listeners
loadEventListeners();

function loadEventListeners(e){
    // delegations dispara cuando se presiona "agregar carrito"
    course.addEventListener('click', buy_course);
    // cuando se elimina un curso del carrito
    shoping_car.addEventListener('click', deleteCourse);
    // al Vaciar el carrito
    emptyShoppingCarBtn.addEventListener('click', empytShopingCar);
    //al cargar el documento mostrar localstorage
    document.addEventListener('DOMContentLoaded', readLocalStorage)
}



                // funciones
// funcion que añade el curso al carrito
function buy_course(e) {
    e.preventDefault();
    // console.log(e.target.classList);

    // delegations para agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const course = e.target.parentElement.parentElement;
        readDataCourse(course);

    }
    

}

// lee los datos del curso
function readDataCourse(course){
    const infoCourse = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
    }

    insertInShopingCar(infoCourse);
    // console.log(infoCourse);
}

function insertInShopingCar(course){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td> <img src="${course.image}" width=100></td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td> 
            <a href="#" class="borrar-curso" data-id="${course.id}">X</a>
        </td>
    `;
    course_list.appendChild(row);
    saveCourseLocalStorage(course);
}
// elimina el curso del carrito en el DOM
function deleteCourse(e){
    e.preventDefault();
    let course,
    courseId;
    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');
        // console.log(courseId);
        // deleteCourseLS(courseId);
    }
    deleteCourseLocalStorage(courseId);
}

// Vaciar Carrito
function empytShopingCar(e){
    //forma lenta (no muy recomendada)
    // course_list.innerHTML = `<td>Carro Vacio</td>`;
    // return false;
console.log(course_list.firstChild);
    while(course_list.firstChild){
        // course_list.firstChild.remove();
        course_list.removeChild(course_list.firstChild);
    }
    // Vaciar local Storage
    EmptyLocalStorage();
    
    return false;


}

// almacena cursos en el carrito al localStorage

function saveCourseLocalStorage(course){
    let courses;
    courses = getCourseLocalStorage();
    // el curso se agrega al arreglo para local Storage
    courses.push(course);

    localStorage.setItem('cursos', JSON.stringify(courses));
}

// comprueba que hay elementos en localStorage
function getCourseLocalStorage(){
    let coursesLS;

    // comprobamos si hay algo en localstorage
    if(localStorage.getItem('cursos') === null){
        coursesLS = [];
    }else{
        coursesLS = JSON.parse(localStorage.getItem('cursos'))
    }
    return coursesLS
}

// imprime los cursos de local storage en el carrito
function readLocalStorage(){
    let localStorageCourses;
    localStorageCourses = getCourseLocalStorage();

    localStorageCourses.forEach(function(course){
        
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${course.image}" width=100>
        </td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${course.id}">X</a>
        </td>
        `;
        course_list.appendChild(row);

    });
}


// Eliminar el curso por el id en LocalStorage
function deleteCourseLocalStorage (course){
    let coursesLS;

    coursesLS = getCourseLocalStorage();

    coursesLS.forEach(function(Objcourse, index){
        if(Objcourse.id === course){
            coursesLS.splice(index, 1);
        }

    });
    localStorage.setItem('cursos', JSON.stringify(coursesLS));
    console.log(coursesLS);
}

// Elimina todos los cursos de localStorage
function EmptyLocalStorage(){

    localStorage.clear();
}