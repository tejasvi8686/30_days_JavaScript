// 2.4: Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food.

// Write an if/else if statement to help john figure out Your country is right for him?

let language = "english";
let people = 10;
let Spanish = true;
let English = true;

if (language === "english" && people <= 10) {
  if (Spanish && English) { 
    console.log("John can live in this country.");
  } else {
    console.log("John cannot live in this country because there is no Spanish or English food available.");
  }
} else {
  console.log("John cannot live in this country because it doesn't meet the language or population criteria.");
}

