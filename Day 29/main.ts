// Day 29
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
// This function finds where "code" first shows up in a text
function findCodePosition(str:string):number{
    return str.indexOf("code");// Looks for "code" and tells where it found it
}
console.log(findCodePosition("learn to code with typescript ")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.


// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// This function checks if a sentence has "JavaScript" in it
function findJavascript(str:string):boolean{
    return str.includes("javascript");// Checks for "JavaScript" and returns true or false
}
// Example: Seeing if a text mentions JavaScript
console.log(findJavascript("learing code with javascript!!"));// Example: Seeing if a text mentions JavaScript
// It simply says true if "JavaScript" is there, or false if it's not.


// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// This function takes out the first 10 characters from any text
function extraction(str:string):string{
    return str.substring(0,10); // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(extraction("Hello,Typescript world"));// Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.



