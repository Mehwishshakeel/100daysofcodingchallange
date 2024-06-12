// Day 32
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Creat an array  of different words
const words:string[]=["Ali","purple","Typescript","learn"];
// Uses .map() to create a new array with the length of each word
const lengths:number[]=words.map((word)=>word.length);
console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.


// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers:number[]):number[]{
    return numbers.filter((number)=>number>10);
}
// Example: Filtering an array of numbers
let numbers=[3,5,10,15,20,25,30];
console.log(filterGreaterThanTen(numbers));


// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// This function calculates the sum of all numbers in an array
function summOfAllNumbers(numbers:number[]):number{
    return numbers.reduce((total,sum)=>total+sum,0);
}
// Example: Calculating the sum of an array of numbers
let Numbers:number[]=[5,6,9,2,6,1];
console.log(summOfAllNumbers(Numbers));
