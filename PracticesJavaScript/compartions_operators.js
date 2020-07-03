const number1 = 20,
      number2 = 50,
      number3 = '20';

console.log(number1 > number2); //Return false
console.log(number1 < number2); //Return True

// triple equal compare type between variables
console.log(typeof(number1));  //return number
console.log(typeof("20")); // return string
console.log(number1 === '20');  //return true

// diferents
console.log( 2 != 3); //return false

console.log('hola' == ' hola'); //return false because the espace before hola

//the order is (A > Z) > (a > z )
console.log('Z' < 'A');

console.log(null == undefined); //return true
console.log(null === undefined); //return false compare type of data
