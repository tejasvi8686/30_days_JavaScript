//Task_1 - Declare a variable using 'var', assign it a number and log the value to the console.

var response = 86;
console.log(response);

//Task_2 - Declare a variable using 'let', assign it a string and log the value to the console.

let request = "tejasvi";
console.log(request);

//Task_3 - Declare a variable using 'let', assign it a boolean value and log the value to the console.

let name = true;
// bool value 0 (flase) value 1 (true)
console.log(true);

//Task_4 - Create variables of different data types(number, string, boolean , object, array) and log each variable's type using the typeof

const number = 20; // number
console.log(`the value of number is ${number}`, "and type of ", typeof number);

const string = "two"; // string
console.log(
  `the value of string is ${string}`,
  "and the type of",
  typeof string
);

const bool = true; // boolean
console.log(`the value of bool is ${bool}`, "and the type of", typeof bool);

const obj = {
  id: 1,
  class: 12,
  subject: "maths",
}; // object

console.log(
  `the value of string is ${JSON.stringify(obj)}`,
  "and the type of",
  typeof obj
);

const arr = [1, 2, 3, 4, 5, 6]; // array
console.log(`the value of arr is ${arr}`, "and the type of", typeof arr);

//Task_5 - Declare a variable using 'let', assign it an initial value, reassign a new value and log both the values to console.

let val1 = 1;
console.log(`The value is ${val1}`);

val1 = 2;
console.log(`The value is ${val1}`);
