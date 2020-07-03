// Create array the objects 
// the propertis of arrays also apply to array objects
// means can be modify values 

const cars = [
    {model: 'Mustang', motor:6.0},
    {model: 'Camaro', motor: 6.1},
    {model: 'Challenger', motor: 6.3},

];
// correct way to modify a value in a const
cars[0].model = 'Audi';  //Correct!!!

/*
cars = {
    model: 'audi',
    motor: 6.1,
}                           //INCORRECT
*/

for(let i = 0; i< cars.length; i++){
    // console.log(cars[i].motor);
    // console.log(`${cars[i].model} ${cars[i].motor}`);

}
// console.log(cars[0].model);
// console.log(cars.length);

// 


