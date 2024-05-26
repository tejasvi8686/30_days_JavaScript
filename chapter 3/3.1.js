// 3.1: Create a function Declaration called describeYourState Which take three parameters Population, traditional food and historical place. Based on this input function should return a String with this format.

// My state population is ** Its traditional food is ** and historical place name is

function describeYourState(population, traditionalFood, historicalPlace) {
  return `My state population is ${population} Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}`;
}

console.log(describeYourState(200000, 'pizza', 'loradkarnwalish'));