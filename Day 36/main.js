// Day 36
// Question 106: Determine if a given year is a leap year using comparison operators.
// This function checks if a year is a leap year
function isLeapYear(year) {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2019));
console.log(isLeapYear(2024));
// By using comparison operators, we can easily determine if a year is a leap year or not.
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
// This function checks if a number is divisible by both 2 and 3
function isDivisibleBy2And3(number) {
    // Uses the modulo operator to check for no remainder
    return (number % 2 === 0 && number % 3 === 0);
}
console.log(isDivisibleBy2And3(12));
console.log(isDivisibleBy2And3(16));
// Logical operators help us verify the number's divisibility by both 2 and 3.
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
// This function compares two strings, ignoring case sensitivity
function comparision(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(comparision("mehwish", "MEHWISH"));
console.log(comparision("rumaisa", "mehwish"));
