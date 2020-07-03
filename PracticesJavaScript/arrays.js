// create array[]

const numbers = [10,20,30,40];
// all array not able modify but the individuals elemnts
// can do it 
// console.log(numbers);

// mix arrays

const mixs = ['hola', 20, true,null, false, undefined]
// console.log(mixs);

//alternative method for create array
const mounths = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July')
console.log(Array.isArray(mounths));  //return true if is an array

//To acces an element, the number equivalent to the index must be placed
mounths[3] //access to element 3 of index = April

// to add elements
mounths[7] = 'August'
// alternate form to add elements
mounths.push('September') //add to final
// add to beginning
mounths.unshift('Mounth 0');

// console.log('esta en la pocision' + mounths.indexOf('April'));

//  delete the last element of an array
mounths.pop();

// delete an element of beggining
mounths.shift();

// delete a specific element or a range
mounths.splice(2,1);   //splice(posicion, elements)
// elements can be more one

// invert the array order
mounths.reverse();
// console.log(mounths);

// join two elements
let array2 = [1,2,3]

console.log(mounths.concat(array2));

// order array
const fruits = ['apple', 'pinaple', 'strawberry', 'melon', 'orange'];

// order_by alfabethic 
fruits.sort();
// console.log(fruits);


// order_by number
array2 = [0,9,80,5,23,1,40,6,8,34,67,65,91,90,23,34]
array2.sort(function(x, y){ 
    return x-y;
});
console.log(array2);


