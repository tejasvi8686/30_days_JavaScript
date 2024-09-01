// Task-1 : Write a program to check if a number is positive,negative, or zero, and log the result to the console.

const a = 10;

if (a > 0) {
  console.log("number is positive");
} else if (a < 0) {
  console.log("number is negative");
} else {
  console.log("number is zero");
}

// Task-2 : Write a program to check if a person is eligible to vote (age >= 18), and log the result to the console.

const age = 18;

if (age >= 18) {
  console.log("person is eligible for vote");
} else {
  console.log("person is not eligible for vote");
}

//Task-3 : Write a program to find the largest of three numbers using nested if-else statements.

num_1 = 10;
num_2 = 90;
num_3 = 140;

if (num_1 > num_2) {
  if (num_1 > num_3) {
    console.log("num_1 is largest");
  } else {
    console.log("num_3 is largest");
  }
} else {
  if (num_2 > num_3) {
    console.log("num_2 is largest");
  } else {
    console.log("num_3 is largest");
  }
}

//Task-4 : Write a program that uses a switch case to determine the day fo the week based on a number (1-7) and log the day name to the console.

const week = 7;

switch (week) {
  case 1:
    console.log("Today is monday");
    break;
  case 2:
    console.log("Today is tuesday");
    break;
  case 3:
    console.log("Today is wenesday");
    break;
  case 4:
    console.log("Today is thursday");
    break;
  case 5:
    console.log("Today is friday");
    break;
  case 6:
    console.log("Today is saturday");
    break;
  case 7:
    console.log("Today is sunday");
    break;
  default:
    console.log("Invalid day");
}

//Task-5 : Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let score = 30;

switch (true) {
  case score >= 90:
    console.log("student get A grade");
    break;

  case score >= 80:
    console.log("student get B grade");
    break;

  case score >= 70:
    console.log("student get C grade");
    break;

  case score >= 60:
    console.log("student get D grade");
    break;

  case score == 50:
    console.log("student get F grade");
    break;

  default:
    console.log("student get E frade");
    break;
}

//Task-6 : Write a program that Use the ternary operator to check if a number is even or odd and log the result to the console.

num = 21;
const result = num % 2 === 0 ? "even" : "odd";
console.log(result);

//Task-7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024; 

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);



if (isLeapYear) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

