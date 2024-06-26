// Day 46
// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
// using loop
for (var i = 1; i <= 10; i++) {
    console.log("Iteration ".concat(i, ",i value:, i"));
}
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
// Demonstrates using a try-catch block to handle errors
try {
    // Intentionally cause an error
    throw new Error("Went Something Wrong");
}
catch (error) {
    console.log(error.message); // Logs the error message
}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After Breakpoint");
