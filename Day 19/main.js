// Day 19
// Q55:Answer
// Make a list of numbers.
var numbers = [2, 3, 4, 5, 6];
// make a new list where each number is twice its original value.
var doubleNumbers = numbers.map(function (numbers) { return numbers * 2; });
// Shows the new list of doubled numbers
console.log(doubleNumbers);
// Q56:Answer
// Given a mix of different types of items
var mixItems = [1, "Orange", 0, false, "Sara", 6];
// make a new list that has only the words.
var newList = mixItems.filter(function (items) { return typeof items === "string"; });
// Shows the list of just words
console.log(newList);
//Q57:Answer
// Find the Average Grade: Given a list of grades, calculate the average grade.
// list of grades
var Grades = [67, 78, 89, 90];
// calculate the average grade
var averageGrade = Grades.reduce(function (total, grade) { return total + grade; }, 0) / Grades.length;
// Shows the average grade
console.log(averageGrade);
