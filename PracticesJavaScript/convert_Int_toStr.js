// length method only for string

let cp = 1234;
cp = String(cp);  //converto to string
console.log(cp.length);

let data;
data = '4' + '4' //correct for lenght

data = true
data = false

data = String([1,2,3])

data = true
data = [1,2,3,4]
data = null; //not able convert
data = data.toString()


data = String(data)

console.log(data);
console.log(data.length);
console.log(typeof data);
