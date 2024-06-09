// Day 28
// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function lengthOfString(str) {
    return str.length;
}
console.log(lengthOfString("Mehwish"));
// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(str) {
    var upperCase = str.toUpperCase();
    var lowerCase = str.toLowerCase();
    console.log("UpperCase:", upperCase, "LowerCase:", lowerCase);
}
convertCase("Mehwish Shakeel");
/// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replacement(sentence) {
    return sentence.replace(/javascript/g, "Typescript");
}
console.log(replacement("I love javascript its awesome"));
