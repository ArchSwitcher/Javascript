// handle date

const today = new Date();

// specific date year, month, day

let cristmas2017 = new Date('2017-12-26');


let actual_month = today.getMonth();

let actual_Date = today.getDate();

let actual_day = today.getDay();

let actual_year = today.getFullYear();

let minutes = today.getMinutes();

let hours = today.getHours();

// get miliseconds since 1970
let time = today.getTime();


// modify the actual year with setFullYear(2016)

    time = today.getFullYear();
    time = today.setFullYear(2016);
    time = today.getFullYear();

console.log(time);

