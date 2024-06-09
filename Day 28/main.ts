// Day 28
// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function lengthOfString(str:string):number{
   return str.length;
}
console.log(lengthOfString("Mehwish"));


// Q83:Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(str:string){
  let upperCase = str.toUpperCase();
  let lowerCase = str.toLowerCase();
  console.log("UpperCase:",upperCase,"LowerCase:",lowerCase);
}
convertCase("Mehwish Shakeel");

//Q84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replacement(sentence:string):string{
    return sentence.replace(/javascript/g, "Typescript");
    // Uses a regular expression with the 'g' flag for a global replacement
}

console.log(replacement("I love javascript its awesome"));
