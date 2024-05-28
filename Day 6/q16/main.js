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
