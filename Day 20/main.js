// Day 20
// Q58 - Write a simple program that can take lots of scores and find their average
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// show the average result
console.log(averageScore(10, 20, 30, 40));
// We add up all the scores, then divide by how many there are.
// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function creatAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
var addSix = creatAdder(6);
console.log(addSix(10)); // If we put 10 in the box, it gives us 15
// Create a self-initializing user profile object
var UserProfile = {
    name: "Mehwish",
    age: 30
};
// Access user information
console.log("Name:".concat(UserProfile.name, ",Age:").concat(UserProfile.age));
