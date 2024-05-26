// 2.6: use nested-if statement to check your age>18

// than check your height height > 5.10.

// If both true show any message(I can sit in exam) in the console?

const age = 19;
const height = 5.01;

if (age > 18) {
  if (height > 5.10) {
    console.log("I can sit in exam");
  } else {
    console.log("you hight is less then 5.10 you can't seat in the exam");
  }
} else {
  console.log("your age is less than 18 you can seat in the exam");
}
