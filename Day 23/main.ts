// Day 23
// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.
// // This function adds a number and a string that represents a number
function addNumberAndString(number1:number,numberString:string):number{
    // Converts the string to a number and adds it to the first number
    return number1+Number(numberString);
}
// Trying it with 10 and "5"
console.log( addNumberAndString(10,"5")); // Shows 15
// The string "5" is turned into the number 5, and then added to 10.

//Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
// Create a function that accepts two decimal numbers
function multiplyDecimalNumbers(decimal1:number,decimal2:number):number{
 // Multiplies the numbers and rounds the result to two decimal places
    return Math.round(decimal1*decimal2*100)/100
}
// Trying it with 0.1 and 0.2
console.log(multiplyDecimalNumbers(0.1,0.2));// Shows 0.02
// After multiplying, we round to make the result easier to read.

// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(
    dividend:number,
    divisor:number
):{
    quotient:Number;remainder:number
} {
      // Calculates the quotient and remainder
    let quotient =Math.floor(dividend/divisor);
    let remainder=dividend % divisor;
     // Returns both in an object
     return {quotient,remainder};
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10,3));// Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.