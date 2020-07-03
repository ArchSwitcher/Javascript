const number1 = "50",
      number2 = 10,
      number3 = 'tres';

//   Javascript  can add two numbers type int or int and str but is
//   recommendable convert to int with Number 
// example if try sum 50 + '30' retrurn 5030

console.log(Number(number1) + number2);

// with substraccion its posible whit string and str
console.log(number1 - number2);
// return 40

let data;
data = Number('20');  //return int = 20
data = Number('20.2121');  //return float
data = Number(true);  //return 1
data = Number(false);  //return 0
data = Number(null);  //NaN
data = Number(undefined);  //NaN
data = Number('hola mundo');  //NaN
data = Number([1,2,3,4,5,6]);  //NaN

data = parseInt('100')  //convert 
data = parseFloat('100.2030')  //return 100.203
data = parseInt('100.2030')  //return 100


// toFixed(define n decimals) only apply numbers
data =  '18946549684';
console.log(data.toFixed(5)); // 


// console.log(data);
// console.log(typeof data);