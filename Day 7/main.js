// Day 7
// Q17: Answer
var guestListName = ["Rumaisa", "Dua", "Hafsa"];
// print a message indicating the number of people you are inviting to dinner.
console.log(" I am inviting ".concat(guestListName.length, " persons to dinner"));
// Q18: Q20 - Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var placesToVisit = ["Canada", "Turkey", "Japan", "India", "America"];
console.log("Places I would like to visit:", placesToVisit);
// Q21 - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var course = {
    Coursetitle: "Typescript",
    ID: 44455789,
    Onsite: true
};
console.log("CourseInfo:".concat(course.Coursetitle, ", Student ID:").concat(course.ID, ", Is student onsite:").concat(course.Onsite));
