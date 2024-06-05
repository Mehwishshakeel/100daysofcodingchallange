// Day 17
// Q49:Answer
// MAke a function with rest parameters
function Hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // using a loop 
    for (var _a = 0, hobbies_1 = hobbies; _a < hobbies_1.length; _a++) {
        var hobby = hobbies_1[_a];
        console.log("I enjoy ".concat(hobby, " "));
    }
}
// Calling a function
Hobbies("reading", "shopping");
Hobbies("sleeping");
Hobbies("watching netflix");
// Q50:Answer
// multiline template literals:
var myIdealDay = "My ideal day would involve:\n1. Waking up early perform prayer first.\n2. Do some coding \n3. at the end of the day i prefer to do some reading.";
// Now console multiline tamplate literals
console.log(myIdealDay);
// Q51:Answer
// Refactoring to Arrow Functions: 
// original function to calculate an area
function calculateArea(width, height) {
    return width * height;
}
// refactored into an arrow function
var calculateAreaArrow = function (width, height) {
    return width * height;
};
// Example usage of the arrow function
console.log(calculateAreaArrow(10, 8)); // Logs the area of the rectangle
