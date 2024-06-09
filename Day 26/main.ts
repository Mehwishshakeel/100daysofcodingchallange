// Day 26
// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
// Make a function in which add two numbers
function addTwoNumbers(num1:number,num2:number){
    // Calculates the sum of num1 and num2
    return num1+num2
}
// Calling the function with two numbers and logging the result
console.log(addTwoNumbers(6,2)); // Outputs 12
// Here, we ask our function to add 5 and 7, and it tells us the answer is 12.

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name:string="anonymous"){
    console.log(`Hello ${name}!`);
}
greetUser("Mehwish");
greetUser();

//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Function declaration for squaring a number
function squareDeclaration(number:number):number{
    return number * number 
};
// Function expression for squaring a number
const squareExpression= function(number:number):number{
    return number * number
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));