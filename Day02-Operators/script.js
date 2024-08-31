// Task-1 : Write a program to add two numbers and log the result to the console.

let sum_1 = 12;
let sum_2 = 12;
console.log(`The sum of sum_1 + b is ${sum_1 + sum_2}`);

// Task-2 : Write a program to subtract two numbers and log the result to the console.

let sub_1 = 20;
let sub_2 = 10;
console.log(`The subtraction of sub_1 - sub_2 is ${sub_1 - sub_2}`);

// Task-3 : Write a program to multiply two numbers and log the result to the console.

let mul_1 = 10;
let mul_2 = 20;
console.log(`The multipaction of mul_1 * mul_2 is  ${mul_1 * mul_2} `);

// Task-4 : Write a program to divide two numbers and log the result to the console.

let div_1 = 20;
let div_2 = 30;
console.log(`The divide of div_1 / div_2 is ${div_1 / div_2}`);


// Task-5 : Write a program to find the remainder when one divided by another and log the result to the console.

let rem_1 = 58;
let rem_2 = 28;
console.log(`The reminder of rem_1 % rem_2 is ${rem_1 % rem_2}`);

// Task-6 : Use the '+=' operator to add a number to the variable and log the result to the console.

let val_1 = 29
val_1 +=9;
console.log(`The value is increased is ${val_1}`);

// Task-8 : Write a program to compare two numbers using '>' and '<' and log the result to console.

let com_1 = 20;
let com_2 = 30;
console.log(`${com_1} > ${com_2}`, com_1 > com_2); // false
console.log(`${com_1} < ${com_2}`, com_1 < com_2); // true

// Task-9 : Write a program to compare two numbers using '>=' and '<=' and log the result to console.

let com_11 = 30;
let com_12 = 30;
console.log(`${com_11} >= ${com_12}`, com_11 >= com_12); // false
console.log(`${com_11} <= ${com_12}`, com_11 <= com_12); // true

// Task-10 : Write a program to compare two numbers using '==' and '===' and log the result to console.

let s = "10"
let s1 = 10;

console.log(`${s} == ${s1}`, s == s1);
console.log(`${s} === ${s1}`, s === s1);
// === strict equality

//Task-11 : Write a program that used the '&&' operator to combine two conditions and log the result to the console.

let and_1 = 20;
let and_2 = 30;
console.log(`${and_1>15 && and_2<=30}`);

// both value is true then && operator return true value other wise return false


//Task-12 : Write a program that used the '||' operator to combine two conditions and log the result to the console.

let and_11 = 20;
let and_12 = 30;
console.log(`${and_11>15 || and_12<30}`);
// if one value is true and || operator true 


//Task-13 : Write a program that used the '!' operator to negate a  condition and log the result to the console.


let isSunny = true;
let isNotSunny = !isSunny;

console.log("Is it sunny? " + isSunny); 
console.log("Is it not sunny? " + isNotSunny); 

//Task-14 : Write a program that used the ternary operator to check if a number is positive or negative and log the result to the console.

let ter = -3;
const check = ter>0  ? "The number is postive" : "The number is negative";
console.log(check);




