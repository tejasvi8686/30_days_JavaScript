// 3.5: Create higher order function named as transformer which take string and firstUpperCaseWord function as an arguments. firstUpperCaseWord is function which make first word UpperCase from a given String.



// Function to make the first word uppercase
function firstUpperCaseWord(str) {
    // Split the string into words
    let words = str.split(' ');
    if (words.length > 0) {
        // Capitalize the first word
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    // Join the words back into a string
    return words.join(' ');
}

// Higher-order function that takes a string and a function
function transformer(str, func) {
    return func(str);
}

// Example usage
const inputString = "hello world, this is an example.";
const result = transformer(inputString, firstUpperCaseWord);
console.log(result); // Output: "Hello world, this is an example."
