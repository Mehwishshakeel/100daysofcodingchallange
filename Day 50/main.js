// Day 50
// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// Uses setTimeout to log a message after a 2-second delay
setTimeout(function () {
    console.log("Display after 3 second");
}, 3000);
//Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("callback executed");
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// synchronous   Example
console.log("Before Execution");
for (var i = 0; i < 1e9; i++) { }
console.log("After Execution");
// asynchronous example
console.log("Before");
setTimeout(function () {
    console.log("Execution...");
}, 2000);
console.log("After");
