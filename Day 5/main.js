// Day 5
// 13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportations = ["Honda motorcycle", "Bike", "Car", "Cycle"];
for (var _i = 0, transportations_1 = transportations; _i < transportations_1.length; _i++) {
    var name_1 = transportations_1[_i];
    console.log("I would like to own a ".concat(name_1));
}
// Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestListNames = ["Rumaisa", "Dua", "Hafsa"];
for (var _a = 0, guestListNames_1 = guestListNames; _a < guestListNames_1.length; _a++) {
    var name_2 = guestListNames_1[_a];
    console.log("Hi!! ".concat(name_2, ", I would like to invite you at dinner"));
}
// Q14: Answer
var guestListName = ["Rumaisa", "Dua", "Hafsa"];
for (var _b = 0, guestListNames_2 = guestListNames; _b < guestListNames_2.length; _b++) {
    var name_3 = guestListNames_2[_b];
    console.log("Hi!! ".concat(name_3, ", I would like to invite you at dinner"));
}
// Q15: Answer
// Cant join us forr dinner
var guestCantCome = "Rumaisa";
console.log("".concat(guestCantCome, " cant join us for dinner"));
// Now replacing her with another guest
guestListName.shift();
guestListName.unshift("Ayesha");
// New Invitation
for (var _c = 0, guestListName_1 = guestListName; _c < guestListName_1.length; _c++) {
    var name_4 = guestListName_1[_c];
    console.log("Hi!! ".concat(name_4, ", I would like to invite you at dinner"));
}
