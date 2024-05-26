// 3.9: Create a JavaScript Function to capitalize the first letter of each word of a given string.

function capitalizeEachWord(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

// Example usage:
let sentence = "hello world";
console.log(capitalizeEachWord(sentence));
