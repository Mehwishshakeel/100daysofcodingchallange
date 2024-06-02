// Day 11
// Q31:Answer
var users = [];
if (users.length === 0) {
    console.log("Need to find some new users!!");
}
//Q32:Answer
// Make a list of five or more usernames called current_users.
var current_users = ["Ayesha", "Sana", "Sadia", "Areeba"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["SADIA", "Ali", "Sadaf", "Areeba"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//Q33:Answer
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalEnding));
}
