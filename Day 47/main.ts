// Day 47
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// Reserved word: let - used to declare a block-scoped local variable
let number = 6
// Reserved word: if - used to execute a block of code if a specified condition is true
if(number > 1){
    console.log("Number is greater than 1");
}
// Reserved word: return - used to exit a function and return a value from that function
function add(a:number,b:number):number{
    return a+b
}
console.log(add(5,6));
// Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.


// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// Attempting to use a reserved word as a variable name
// let if = 5; // This line would cause a syntax error

console.log(
    "Using a reserved word as a variable name causes a syntax error in JavaScript."
  );
  // It's important to avoid using reserved words as identifiers to prevent these errors.

  // Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
  // Example use of the 'await' reserved word in asynchronous JavaScript
  async function fetchData(){
     // Assuming fetchSomething returns a Promise
     const Data = await fetchData();
     console.log(Data);
      // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.

  }
    
  console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
  // This demonstrates how 'await' improves readability and flow in asynchronous code.