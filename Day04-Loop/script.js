//Task-1 : Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);
}

//Task-2 : Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i < 10; i++) {
  const table = 5 * i;
  console.log(table);
}

//Task-3 : Write a program to calculate the sum of numbers form 1 to 10 using a while loop.

count = 1;
sum = 0;

while (count <= 10) {
  var add = (sum += count);
  count++;
}

console.log(add);

//Task-4 : Write a program to print numbers from 10 to 1 usind a while loop.

count_1 = 10;

while (count_1 > 0) {
  let minus = count_1--;
  console.log(minus);
}

//Task-5 : Write a program to print numbers from 1 to 5 using do...while loop.

let count_2 = 1;

do {
  console.log(`print the value of ${count_2}`);
  count_2++;
} while (count_2 <= 5);

//Task-6 : Write a program to calculate the factorial of a number using a do...while loop.

let num = 5,
  fact = 1;
do {
  fact *= num;
  num--;
} while (num > 0);
console.log(fact);
console.log("\n");

/* Task-7 : Write a program to print pattern usind nested for loops:
 *
 **
 ***
 ****
 ***** */

for (let i = 1; i <= 10; i++) {
  let pattern = " ";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
} 
console.log("\n");
 