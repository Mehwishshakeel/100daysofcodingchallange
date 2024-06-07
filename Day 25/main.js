// Day 25
// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
// creating a function 
function updateVaraiable() {
    var value1 = 10; // Initially assigns the value 10
    console.log("Initial value:", value1); // logs the initial value
    value1 = 20; // Updates the value to 20
    console.log("Updated value:", value1); // logs the updated value
}
updateVaraiable();
// We assign a value to a variable and then update it, showing how values can change.
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
// // This function swaps the values of two variables
function swapValues() {
    var a = 5;
    var b = 10;
    console.log("Before swap: a=", a, "b=", b);
    var temp = a; // set temporary value of a =b and b=a switch the values
    a = b;
    b = temp;
    console.log("After swap: a=", a, "b=", b);
}
swapValues();
// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
// This function uses compound assignment operators for different operations
function compoundOperators() {
    var x = 4;
    console.log("Initial x:", x);
    x += 2;
    console.log("After Addintion:", x);
    x -= 1;
    console.log("After subtraction:", x);
    x *= 3;
    console.log("After multiplication:", x);
    x /= 2;
    console.log("After division:", x);
}
compoundOperators();
