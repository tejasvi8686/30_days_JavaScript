//Task-1 : Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [5, 6, 7, 8, 9, 1, 2, 4, 4, 65];
console.log(arr);

//Task-2 : Access the first and last elements of the array and log them to the console.

const arr_1 = [4, 5, 67, 8, 1, 24, 567, 98];
console.log(`first element`, arr_1[0]);
console.log(`last element`, arr_1[7]);

// Task-3 : Use the `push` method to add a new number to the end of the array and log the updated array.

const arr_2 = ["mango", "apple", "banana"]
arr_2.push("kiwi")
console.log(arr_2);

//Task-4 : Use the `pop` method to remove the last element from the array and  log the updated array.

arr_2.pop()
console.log(arr_2);

//Task-5 : Use the `shift` method to remove the first element from the array and  log the updated array.

arr_2.shift()
console.log(arr_2);

//Task-6 : Use the `unshift` method to add  a new number to the beginning of the  array and  log the updated array.

arr_2.unshift()
console.log(arr_2);

//Task-7 : Use the `map` method to create a new array where each number is doubled and log the new array.

const arr_3 = [1,3,4,5,6,7,8];
const double_array = arr_3.map(num => num*2)
console.log(double_array);
 
//Task-8 : Use the `filter` method to create a new array with only even numbers and log the new array.

const arr_4 = [2,3,4,5,6,7,8,9,10];
const filter_arr = arr_4.filter(num => num % 2 == 0 )

console.log(filter_arr);

//Task-9 : Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  

//Task-10 : Use a `for` loop to itereate over the array and log each element to the console.

const arr_5 = [24,3435,656455,3253532,24325235,3253425,325325]

for (let index = 0; index < arr_5.length; index++) {
    const element = arr_5[index];
    console.log(element); 
}

console.log("***********************************************************************************");


//Task-11 : Use the `forEach` method to iterate over the array and log each element to the console.

const arr_6 = [22,33,44,55,66,77,88,99,110,111,112,113,114,115,116,117,118,119,110,120,121,122,123,124,125,126]; 

arr_6.forEach(element => {
  console.log(element);
});

//Task-12 : Create a two-dimensional array (matrix) and log the entire array to the console.


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

//Task-13 : Access and log a specific element from the two-dimensional array.


