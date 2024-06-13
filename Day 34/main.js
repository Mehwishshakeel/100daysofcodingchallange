// Day 34
// Question 100: Use the JavaScript Math object to find the square root of 144.
// Finds the square root of 144
var squareRoot = Math.sqrt(144);
console.log("Square root of 144 is  ".concat(squareRoot));
// Question 101: Generate a random integer between 1 and 10.
// Generate random integers between 1 and 10
function getRandom() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandom()); // Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.
// Question 102: Calculate and log the absolute difference between the number -5 and 5.
// Calculates the absolute difference between -5 and 5
var difference = Math.abs(-5 - 5);
console.log(difference);
