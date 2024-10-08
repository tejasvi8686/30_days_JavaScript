//Task-1 : Write a function to check if a number is  even or odd and log the result to the console.

function check(num) {
  if (num % 2 == 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}

check(4);

//Task-2 : Write a function to calculate the square of a number and return the result.

function square(a) {
  return a * a;
}

console.log(square(5));

//Task-3 : Write a function expression to find the maximum of two numbers and log the result to the console.

const find = function numbers(a, b) {
  if (a > b) {
    console.log("a is greater number");
  } else {
    console.log("b is greater number");
  }
};

find(5, 4);

//Task-4 : Write a function expression to concatenate two strings and return the result.

const con = function concat(a, b) {
  return a + b;
};

console.log(con("tejasvi", "raj"));

//Task-5 : Write and arrow function to calculate the sum of two numbers and return the result.

const sum = (num_1, num_2) => {
  return num_1 + num_2;
};

console.log(sum(10, 12));

//Task-6 : Write an arrow function to check if a string constains specific character and return a boolean value.

const str = (str, char) => {
  return str.includes(char);
};

console.log(str("tejasvi", "t"));

//Task-7 : Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

function product(a, b = 10) {
  return a * b;
}

console.log(product(10, 20));
console.log(product(10));

//Task-8 : Write a function that takes a person's name and age and returns a greeting message.Provide a default value for the age

let greet = function greeting(name, age = 18) {
  return `Hello my name is ${name} and my age is ${age} `;
};

console.log(greet("tejasvi"));

//Task-9 : Write a higher-order functions that takes a function and a number, and calls the function that many times.

// Higher-order function that takes a function and a number, and calls the function that many times
function repeatFunction(fn, times) {
  return function() {
    for (let i = 0; i < times; i++) {
      fn(); // Call the passed function
    }
  };
}

// Example function to be passed
function sayHello() {
  console.log("Hello!");
}

// Calling the higher-order function
const repeatedHello = repeatFunction(sayHello, 5);
repeatedHello(); // This will call sayHello 5 times



//Task-10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.


// Higher-order function that takes two functions and a value
function applyFunctions(fn1, fn2, value) {
  // Apply the first function to the value
  const firstResult = fn1(value);
  
  // Apply the second function to the result of the first function
  const secondResult = fn2(firstResult);
  
  return secondResult;
}

// Example functions
function add5(num) {
  return num + 5;
}

function multiplyBy2(num) {
  return num * 2;
}

// Applying the functions to a value
const result = applyFunctions(add5, multiplyBy2, 10);
console.log(result); // Output: 30
