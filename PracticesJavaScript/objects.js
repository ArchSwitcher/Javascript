// object create {}

const person = {
    name: 'Pablo',
    last_name: 'Zapeta',
    profession: 'Developer Python',
    email: 'correo@correo.com',
    skills: ['Css', 'Python', 'Javascript'],
    personal: {
        age: 28,
        country: 'Guatemala',
        city: 'Quetzaltenango'

    },
    birthday: function(){
        // return new Date().getFullYear() - person.personal.age;  //incorrect 
        return new Date().getFullYear() - this.age;                //correct 
    }

    // can be add object inside other object
} 

console.log(person.birthday() );
// to access an element call object after . call atribute

// console.log(person.email);

// console.log(person.skills[1]);

// console.log(person.personal.age);


