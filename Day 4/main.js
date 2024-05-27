// Day 4
//Q10 - Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// First program:
// Addition:
console.log(6 + 2);
// Subtraction :
console.log(10 - 2);
// Multiplication:
console.log(4 * 2);
// Division:
console.log(16 / 2);
// Second program:
// make a variable of your favourite number
var favouriteNumber = 10;
// print a message
var message = "My favourite number is";
console.log(message, favouriteNumber);
// Q11 - Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsName = ["Areeba", "Sadaf", "Sara", "Faiza", "Kulsoom"];
// using for loop
for (var i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
// Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Areeba", "Sadaf", "Sara"];
// using for loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello, ".concat(name_1, ", can we meet today?"));
}
