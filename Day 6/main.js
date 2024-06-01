var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Day 6
// Q16: Answer
var guestListNames = ["Hafsa", "Sadia", "Aneela", "Anum"];
console.log("Good News!! I found the bigger tabel");
// Add more guest
guestListNames.unshift("Mehwish");
guestListNames.splice(guestListNames.length / 2, 0, "Rumaisa");
guestListNames.push("Sana");
// print a message
for (var _i = 0, guestListNames_1 = guestListNames; _i < guestListNames_1.length; _i++) {
    var name_1 = guestListNames_1[_i];
    console.log("Hello!! ".concat(name_1, " would you like to join us for dinner"));
}
// Q17: Answer
console.log("SORRY!! we can invite only two people for dinner");
// Removing members from the list 
while (guestListNames.length > 2) {
    var removedGuest = guestListNames.pop();
    console.log("SORRY!,".concat(removedGuest, ", we cant invite you at dinner due to some reasons"));
}
for (var _a = 0, guestListNames_2 = guestListNames; _a < guestListNames_2.length; _a++) {
    var name_2 = guestListNames_2[_a];
    console.log("Hi!, ".concat(name_2, ", You are still invited"));
}
guestListNames.pop();
guestListNames.pop();
console.log(guestListNames); // show empty list
// Q18:Answer:
// Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
var fivePlaces = ["Turkey", "Canada", "America", "Japan", "Asia"];
//Print your array in its original order.
console.log("Original Order:", fivePlaces);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", __spreadArray([], fivePlaces, true).sort());
// Show that your array is still in its original order by printing it.
console.log("Original Order:", fivePlaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", __spreadArray([], fivePlaces, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original Order:", fivePlaces);
// Reverse the order of your list. Print the array to show that its order has changed.
fivePlaces.reverse();
console.log("Reversed Oder:", fivePlaces);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
fivePlaces.reverse();
console.log("Original Order:", fivePlaces);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
fivePlaces.sort();
console.log("Alphabetical Order:", fivePlaces);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
fivePlaces.reverse();
console.log("Reversed Alphabetical Order:", fivePlaces);
