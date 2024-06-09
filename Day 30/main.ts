// Day 30
// Question 88: Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.
// This function turns text into an actual number
function convertTextIntoNumber(str:string):number{
    return Number(str);
}
console.log(convertTextIntoNumber("12345"));

//Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.
// This function rounds a number to two decimal places
function roundingNuumbers(num:number):number{
    return Number(num.toFixed(2));
}
console.log(roundingNuumbers(3.14159));


//Question 90: Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.
// This function creates a random number between 1 and 10
function genratingRandomNumbers():number{
    return Math.floor(Math.random()*10)+1 // Scales up and rounds down
}
// Example: Getting a random number
console.log(genratingRandomNumbers());// Shows a random number between 1 and 10
// Each time you call this, you might get a different number. It's all up to chance!