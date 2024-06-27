// Day 49
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// This function accepts a callback function and invokes it with given arguments
function callBack(cb:(arg1:number,arg2:number)=>void,
arg1:number,
arg2:number):void{
cb(arg1,arg2);// Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add= (a:number,b:number)=>{
console.log(a+b);
}
callBack(add,3,5);

// Question 146: Show an example of a callback function used to filter an array of numbers.
// This array of numbers will be filtered
let numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
// Uses .filter() with a callback function to filter out numbers greater than 4
let filternumber:number[]=numbers.filter((number)=>number >= 4);
console.log(filternumber);

// Question 147: Explain how to handle errors in a callback pattern.
// Function that uses a callback pattern, including error handling
function fetchData(cb:(error:Error|null,data?:string)=>void):void{
const error = new Error("Failed to fetch data");
const data = "some data";
if(Math.random() > 0.5){
    cb(null,data);
} else {
    cb(error);
}
}
// Using the fetchData function with error handling in the callback
fetchData((error,data)=>{
    if(error){
        console.error(error.message);
    }else{
        console.log(data);
    }
})