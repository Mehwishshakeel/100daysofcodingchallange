var _this = this;
// Day 43
// Question 127: Convert a traditional function expression to an arrow function.
// Traditional function expression
var traditionalFunction = function (a, b) {
    return a + b;
};
// convert into arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(5, 2));
console.log(arrowFunction(5, 2));
// Demonstrates the conversion of a traditional function expression to an arrow function.
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Arrow function that calculates the product of all its parameters
var multipleParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multipleParameters(2, 3, 4));
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Demonstrating 'this' in traditional vs. arrow functions
var traditionalVsarrow = {
    value: "traditionalvsarrowvalue",
    TraditionalFunction: function () {
        console.log("Traditional Value:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow Function:", _this.value);
    },
};
traditionalVsarrow.TraditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsarrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.
