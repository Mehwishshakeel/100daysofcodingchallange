"use strict";
// Day 38
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington");
countries.set("Pakistan", "Islamabad");
countries.set("Japan", "Tokyo");
console.log(countries);
// Logs the Map with the countries and their capitals.
//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// This function checks for "Canada" in the Map and logs its capital
function canadaInMap(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of canada is ${countries.get("Canada")}`);
    }
    else {
        console.log(`Canada in not in the Map`);
    }
}
// Assuming countries Map from Question 112
canadaInMap(countries);
// Checks if Canada is in our Map and logs the capital if it exists.
//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Creates a Map to store student IDs (keys) and names (values)
const student = new Map();
student.set(456, "Ayesha");
student.set(789, "Sana");
student.set(345, "Sadia");
// now using for Each loop for iteration
student.forEach((name, id) => {
    console.log(`Student ID: ${id},Name:${name}`);
});
// This loop goes through each student and logs their ID and name.
