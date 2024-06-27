// Day 49
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// This function accepts a callback function and invokes it with given arguments
function callBack(cb, arg1, arg2) {
    cb(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b);
};
callBack(add, 3, 5);
// Question 146: Show an example of a callback function used to filter an array of numbers.
// This array of numbers will be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 4
var filternumber = numbers.filter(function (number) { return number >= 4; });
console.log(filternumber);
// Question 147: Explain how to handle errors in a callback pattern.
// Function that uses a callback pattern, including error handling
function fetchData(cb) {
    var error = new Error("Failed to fetch data");
    var data = "some data";
    if (Math.random() > 0.5) {
        cb(null, data);
    }
    else {
        cb(error);
    }
}
// Using the fetchData function with error handling in the callback
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
