// Day 19
// Q55:Answer
// Make a list of numbers.
let numbers=[2,3,4,5,6];
// make a new list where each number is twice its original value.
let doubleNumbers=numbers.map((numbers)=>numbers*2);
// Shows the new list of doubled numbers
console.log(doubleNumbers);
// Q56:Answer
// Given a mix of different types of items
let mixItems=[1,"Orange",0,false,"Sara",6];
// make a new list that has only the words.
let newList=mixItems.filter((items)=>typeof items ==="string");
// Shows the list of just words
console.log(newList);
//Q57:Answer
// Find the Average Grade: Given a list of grades, calculate the average grade.
// list of grades
let Grades=[67,78,89,90];
// calculate the average grade
let averageGrade=Grades.reduce((total,grade)=>total+grade,0) / Grades.length;
 // Shows the average grade
 console.log(averageGrade);