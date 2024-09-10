//Task-1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

names = "tejasvi raj";
age = "24";

const greeting = `Hello ${names} you are ${age} old`;
console.log(greeting);

//Task-2 : Create a multi-line string using template literals and log it to the console.

const str = `create a multiline
 and using the template
 and log it to the console`;

console.log(str);

//Task-3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber] = numbers;

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);


//Task-4 : Use object destructuring to extract the title and author from a book object and log them to the console.

const mybook = {
    title : "atomic habit",
    author : "tejasvi raj"
}

const {title, author} = mybook

console.log("Title: ", title);
console.log("author: ", author);


//Task-5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const fruit1 = ["mango", "apple", "grapes", "banana"];
const vegitable2 = ["beans", "carrot", "cucmbuer", "ladyfinger"];

const both = [...fruit1, ...vegitable2];

console.log(both);


//Task-6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.



//Task-7 : Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second pareameter.

//Task-8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.

//Task-9 : Create an object with computed property names based variables and log the object to the console.
